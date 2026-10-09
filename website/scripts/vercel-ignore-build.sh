#!/usr/bin/env bash
# Vercel "Ignored Build Step" (website/vercel.json, ignoreCommand): deploys
# go out in batches (owner, 2026-10-09). Every deploy empties the page cache,
# and crawlers then rebuild ~3,000 pages - about 10 minutes of CPU each time;
# the free plan ran out of CPU on 2026-10-08 with several deploys a day.
#
# Exit 0 = skip this commit, exit 1 = build and deploy it.
#   1. "[deploy]" in the commit message: deploy now (urgent fix, or the
#      left hand shipping a batch).
#   2. Nothing changed in website/ or data/ since the last deploy: skip.
#   3. The last deploy is MIN_HOURS old or more: deploy (at most one
#      automatic deploy per MIN_HOURS; changes wait for the next push).
#   4. Otherwise skip.
# When the last deployed commit is unknown, deploy - better one deploy too
# many than a site stuck on old code.
set -u
MIN_HOURS=20

msg="${VERCEL_GIT_COMMIT_MESSAGE:-$(git log -1 --format=%B 2>/dev/null)}"
if printf '%s' "$msg" | grep -q '\[deploy\]'; then
  echo "[deploy] in the commit message: deploying."
  exit 1
fi

prev="${VERCEL_GIT_PREVIOUS_SHA:-}"
if [ -z "$prev" ]; then
  echo "No previous deployment known: deploying."
  exit 1
fi
if ! git cat-file -e "$prev^{commit}" 2>/dev/null; then
  git fetch --quiet --deepen=200 origin 2>/dev/null || true
fi
if ! git cat-file -e "$prev^{commit}" 2>/dev/null; then
  echo "Last deployed commit $prev is not in the clone: deploying."
  exit 1
fi

top="$(git rev-parse --show-toplevel)"
if git -C "$top" diff --quiet "$prev" HEAD -- website data; then
  echo "No changes in website/ or data/ since $prev: skipping."
  exit 0
fi

prev_time="$(git show -s --format=%ct "$prev")"
age_hours=$(( ( $(date +%s) - prev_time ) / 3600 ))
if [ "$age_hours" -ge "$MIN_HOURS" ]; then
  echo "Last deploy is ${age_hours} h old (>= ${MIN_HOURS} h): deploying the batch."
  exit 1
fi
echo "Last deploy is ${age_hours} h old (< ${MIN_HOURS} h): waiting for the batch. Put [deploy] in a commit message to deploy now."
exit 0
