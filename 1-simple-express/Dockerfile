FROM node:boron

# Create app directory
RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY index.js /usr/src/app

EXPOSE 7777

CMD [ "node", "index.js" ]