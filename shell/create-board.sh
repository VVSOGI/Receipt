#!/bin/bash
set -e
source env.sh

for i in {1..150}
do
  TITLE="title $i"
  DESCRIPTION="description $i"

  PAYLOAD=$(jq -n \
                  --arg title "$TITLE" \
                  --arg description "$DESCRIPTION" \
                  --arg priority "high" \
                  --arg commitUrl "https://github.com/VVSOGI/Receipt" \
                  '{title: $title, description: $description, priority: $priority, commitUrl: $commitUrl}')

  curl -X POST "$API_URL/boards" \
       -H "Content-Type: application/json" \
       -H "Authorization: bearer $AUTH_TOKEN" \
       -d "$PAYLOAD"
done