FROM node:6.9.1-slim

ADD ./ /opt/flash-cards
WORKDIR /opt/flash-cards

COPY package.json .

COPY . .

EXPOSE 9000

CMD npm start
