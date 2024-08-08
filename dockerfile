FROM node:18-alpine

WORKDIR /app


COPY package*.json ./

#runing

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "nmp","start" ]