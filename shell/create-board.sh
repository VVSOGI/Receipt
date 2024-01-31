#!/bin/bash
set -e
source env.sh
source config.sh

for i in {1..150}
do
  TITLE=${TITLES[$RANDOM % ${#TITLES[@]}]}
  DESCRIPTION=${DESCRIPTIONS[$RANDOM % ${#DESCRIPTIONS[@]}]}

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