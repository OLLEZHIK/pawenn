#!/bin/sh
# Заливает дамп в локальную копию (не в Neon!).
pg_restore --clean --if-exists --no-owner --no-acl -d "$LOCAL_URL" "/dump/$1" 2>/tmp/restore.err
rc=$?
grep -v "^pg_restore: warning" /tmp/restore.err | tail -5 >&2
exit $rc
