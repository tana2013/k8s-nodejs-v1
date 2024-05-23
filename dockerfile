FROM node:latest
WORKDIR user/src/app
COPY package.json ./
RUN npm install 
COPY . .
CMD ["node", "index.js"]
EXPOSE 3000