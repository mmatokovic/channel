## init project
yarn init  

## dependencies
yarn add @prisma/client fastify fastify-zod zod zod-to-json-schema fastify-jwt fastify-swagger  
npm install pino fastify @prisma/client -w api

## devDependencies
yarn add ts-node-dev typescript @types/node --dev  
npm install jest @types/jest @types/node ts-node ts-node-dev typescript -w api -D

## Initialise prisma
npx prisma init --datasource-provider postgresql

### Migrate the schema
npx prisma migrate dev --name init

### Seed the database
npx prisma db seed

### PostgreSQL connection string
postgres://postgres:postgrespw@postgres:5432

### Docker
docker-compose up  
docker run -p 5050:80 -e 'PGADMIN_DEFAULT_EMAIL=pgadmin4@pgadmin.org' -e 'PGADMIN_DEFAULT_PASSWORD=admin' -d --name pgadmin4 dpage/pgadmin4  
Open pgAdmin4 in your browser at: http://localhost:5050
Log in:
- Username: pgadmin4@pgadmin.org
- Password: admin

Click Add New Server and fill in the following fields:  

- Server Name: pg (or whatever you prefer)
- On the Connection tab:
    - Host: host.docker.internal
    - Port: 49155
    - Username: postgres
    - Password: postgrespw

### ToDo
add LICENCE  
add Modules  

#### prisma
seed db

#### Modules
- user
    - controller
    - route
    - scenarios
    - schema
    - service
    - test

- product
    - controller
    - route
    - scenarios
    - schema
    - service
    - test