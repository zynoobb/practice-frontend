FROM node:18

WORKDIR /app

COPY package.json /folder/
COPY yarn.lock /folder/
WORKDIR /folder/
RUN yarn install
COPY . /folder/

COPY . .
CMD  yarn dev
