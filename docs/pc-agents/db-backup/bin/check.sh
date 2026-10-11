#!/bin/sh
# Файл читается pg_restore (оглавление без ошибок).
set -e
pg_restore --list "/dump/$1" > /dev/null
