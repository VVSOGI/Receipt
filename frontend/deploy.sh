#!/bin/bash
set -e

# ANSI 코드 정의
RED='\033[0;31m'    # 빨간색
NC='\033[0m'        # 리셋 (No Color)

# 에러 메시지 출력 함수
error_message() {
    echo -e "${RED}Error: $@ failed${NC}" 1>&2
    exit 1
}

# 명령어 실행 및 에러 처리 함수
run_command() {
    $@ 2>&1 || error_message "$@"
}

run_command git pull
run_command docker build -t vevv-test .
run_command docker rm -f vevv-test
run_command docker run -d --restart=always --name vevv-test --network xrcloud vevv-test
run_command docker system prune -a -f
echo "Deploy Success"