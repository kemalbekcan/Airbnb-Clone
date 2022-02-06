FROM node:13
WORKDIR /server
COPY package.json /server
RUN npm install
COPY . /server
CMD ["npm", "start"]
EXPOSE 3000