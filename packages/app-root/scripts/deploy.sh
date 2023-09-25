#!/usr/bin/env bash

# Log Each command
set -x


BRANCH_NAME=$(git branch --show-current)
npx --no-install gh-pages -b static_${BRANCH_NAME} --add \
  --dist dist \
  --dest .

# error
set -e