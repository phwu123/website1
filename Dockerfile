FROM node:alpine
RUN mkdir /web
WORKDIR  /web
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 2000
CMD ["npm", "start"]