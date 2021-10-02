FROM node:14.17
WORKDIR /app
COPY ./package*.json ./
RUN npm install
RUN yarn install
COPY ../ .
CMD ["node", "src/index.js"]