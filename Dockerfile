FROM node:14-alpine

WORKDIR /

COPY ./ /

RUN npm i

ENV SERVER_PORT=

CMD [ "npm", "start" ]
