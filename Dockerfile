FROM node:10.15.3-stretch-slim

WORKDIR /app

COPY package*.json ./

RUN apt-get update && apt-get install -y git
RUN npm install

COPY . .

CMD ["npm", "run", "start"]
