FROM node:alpine

RUN apk update && apk add ca-certificates && update-ca-certificates

RUN mkdir /app
ADD . /app
WORKDIR /app

RUN npm update
CMD npm start