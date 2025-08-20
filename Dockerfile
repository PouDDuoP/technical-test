FROM node:24-alpine3.21 AS base

RUN mkdir -p /usr/src/app
ENV DIR /usr/src/app
WORKDIR $DIR

FROM base AS build

RUN apk update && add --no-cache dumb-init

COPY package*.json $DIR

RUN npm install
RUN npm ci

COPY . .

RUN npm prune --production

# Para Desarrollo "docker-compose up technical-test-0 --build"
FROM base AS development

ENV NODE_ENV=development

RUN npm install nodemon -g

COPY package*.json $DIR

RUN npm install

EXPOSE $PORT

CMD ["npm", "run", "start:dev"]
