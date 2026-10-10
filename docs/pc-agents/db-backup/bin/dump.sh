#!/bin/sh
# $1 — имя файла дампа в /dump. Только чтение из Neon.
set -e
pg_dump "$NEON_URL" -Fc --no-owner --no-acl -f "/dump/$1"
