FROM node:16.17-alpine

WORKDIR /usr/app

COPY package*.json yarn.* ./

RUN yarn 

COPY . . 

EXPOSE 3080

CMD yarn dev