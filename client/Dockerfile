FROM node:13.0.1-alpine

# Set ARGS
ARG CLIENT_DIR

# Create app directory
RUN mkdir -p ${CLIENT_DIR}

# Set working directory in the image
WORKDIR ${CLIENT_DIR}

# add `/app/node_modules/.bin` to $PATH
# ENV PATH ${CLIENT_DIR}/node_modules/.bin:$PATH

# install bash
RUN apk add --update --no-cache bash

COPY package.json .

# COPY yarn.lock .
COPY package-lock.json .

# RUN npm install -g yarn serve
RUN npm install -g serve

# RUN yarn install
RUN npm install --silent

COPY . .

# RUN yarn build
RUN npm run build

###################################

# FROM ubuntu:18.04

# # install sudo and curl
# RUN apt-get update && \
#     apt-get install -y sudo && \
#     apt-get install -y curl


# # install nodejs
# RUN curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
# RUN sudo apt-get install -y nodejs

# # Set ARGS
# ARG CLIENT_DIR

# # Create app directory
# RUN mkdir -p ${CLIENT_DIR}

# # Set working directory in the image
# WORKDIR ${CLIENT_DIR}

# COPY package.json .

# COPY package-lock.json .

# RUN npm install -g serve

# RUN npm install

# COPY . .

# RUN npm run build