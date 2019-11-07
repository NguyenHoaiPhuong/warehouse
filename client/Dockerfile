FROM node:13.0.1-alpine

# Set ARGS
ARG CLIENT_DIR
ARG TEMP_DIR=/itv/warehouse/cache
ARG PUID=2000
ARG PGID=2000

# install bash for interaction mode
RUN apk add --update --no-cache bash

RUN npm install -g yarn serve
RUN npm install -g serve


# Set working directory: temp directory
WORKDIR ${TEMP_DIR}

# copy package.json and package-lock.json to the container temp directory
COPY package.json .
# COPY package-lock.json .
COPY yarn.lock .

# install all dependencies
RUN yarn install
# RUN npm install

# Create app directory
RUN mkdir -p ${CLIENT_DIR}

# Set working directory: client directory
WORKDIR ${CLIENT_DIR}

COPY . .

RUN cp -r ${TEMP_DIR}/node_modules/. ${CLIENT_DIR}/node_modules/
RUN yarn build