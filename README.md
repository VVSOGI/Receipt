## Docker compose testing

### How to use Docker
1. git clone projects.
2. frontend
   - cd frontend
   - npm run docker-compose:up
   - 만약 network가 없다고 나오면, docker network create project_1
3. backend
   - cd backend
   - npm run docker-compose:up
4. proxy
   - cd proxy
   - bash run.sh

### Issue 1
docker compose down 했을 때, 경고 메세지.
```bash
WARN[0000] The "DB_USERNAME" variable is not set. Defaulting to a blank string. 
WARN[0000] The "DB_DATABASE" variable is not set. Defaulting to a blank string. 
WARN[0000] The "DB_PASSWORD" variable is not set. Defaulting to a blank string. 
```

위의 에러는 backend 파일안에 있는 env를 사용해서 그런 것 같다. docker-compose와 동일한 경로에 .env가 있어야 하는데 없어서 그런 것 같다.