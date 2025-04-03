ARG NODE_VERSION=23.2.0

FROM node:${NODE_VERSION}-alpine as base

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]