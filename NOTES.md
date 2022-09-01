## init project
yarn init

npm install fastify -w api

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