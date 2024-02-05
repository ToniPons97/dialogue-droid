FROM node:latest

WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY .env .

RUN npm install

COPY . .

CMD ["npm", "run", "dev"]