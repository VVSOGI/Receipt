#!/bin/bash
set -e
source env.sh
source config.sh

for i in {150..300}
do
  TITLE=${TITLES[$RANDOM % ${#TITLES[@]}]}
  DESCRIPTION=${DESCRIPTIONS[$RANDOM % ${#DESCRIPTIONS[@]}]}

  PAYLOAD=$(jq -n \
                  --arg title "$TITLE" \
                  --arg description "$DESCRIPTION" \
                  --arg priority "high" \
                  '{title: $title, description: $description, priority: $priority}')

  curl -X POST "$API_URL/boards" \
       -H "Content-Type: application/json" \
       -H "Authorization: bearer $AUTH_TOKEN" \
       -d "$PAYLOAD"
done