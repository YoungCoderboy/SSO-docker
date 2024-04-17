FROM node:18-alpine

WORKDIR /app1/

COPY public/ /app1/public
COPY src/ /app1/src
COPY package.json /app1/

RUN npm install

CMD [ "npm","start" ]