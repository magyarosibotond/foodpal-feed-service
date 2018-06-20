FROM node:carbon

WORKDIR /usr/src/app

COPY . .
COPY package*.json ./

RUN npm install

EXPOSE 8000
CMD [ "npm", "start" ]