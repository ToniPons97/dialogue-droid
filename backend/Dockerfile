FROM node:lts-iron

WORKDIR /code

COPY package.json package.json
COPY package-lock.json package-lock.json
COPY .env .

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]