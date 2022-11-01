FROM node:16.18-alpine

ENV HOME=/home/app

COPY package*.json yarn.* #HOME/node_docker/

WORKDIR $HOME/node_docker

RUN yarn 

RUN yarn cache clean

COPY . $HOME/node_docker 

EXPOSE 3000

CMD ["yarn", "dev"]