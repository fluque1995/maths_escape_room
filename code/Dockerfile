FROM node:slim

RUN mkdir /app
WORKDIR /app

COPY package.json /app
COPY tsconfig.json /app

RUN npm install

COPY src /app/src
COPY config.ts /app
COPY run_listeners.ts /app
COPY setup_rooms.ts /app