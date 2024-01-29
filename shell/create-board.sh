#!/bin/bash
set -e
source env.sh

for i in {150..300}
do
  # JSON 본문 생성
  PAYLOAD=$(jq -n \
                  --arg title "post $i" \
                  --arg description "contents $i" \
                  --arg priority "high" \
                  '{title: $title, description: $description, priority: $priority}')

  # API에 POST 요청 보내기
  curl -X POST "$API_URL/boards" \
       -H "Content-Type: application/json" \
       -H "Authorization: bearer $AUTH_TOKEN" \
       -d "$PAYLOAD"
done