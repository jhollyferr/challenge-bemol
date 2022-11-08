FROM node:16.18-alpine

ENV HOME=/home/node

RUN mkdir -p $HOME/app/node_modules

WORKDIR $HOME/app

COPY package*.json yarn.* ./

COPY . $HOME/app/

RUN chown -R node:node $HOME

RUN yarn 

USER node

EXPOSE 3000

ENTRYPOINT ["yarn", "dev"]