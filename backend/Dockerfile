FROM node:18.9.1

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5050

CMD ["npm", "start"]
