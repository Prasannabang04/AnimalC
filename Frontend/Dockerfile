FROM node:18.9.1

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install --legacy-peer-deps && npm rebuild bcrypt --build-from-source

COPY . .

EXPOSE 5050

CMD ["npm", "start"]
