FROM node:12

WORKDIR /code

RUN yarn
COPY . .
