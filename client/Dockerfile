FROM node:13.0.1-alpine

# Environment app directory
ENV APP_DIR /go/src/github.com/NguyenHoaiPhuong/warehouse/client

# Create app directory
RUN mkdir -p ${APP_DIR}

# Set working directory in the image
WORKDIR ${APP_DIR}

COPY package.json .

COPY yarn.lock .

RUN npm install -g yarn serve

RUN yarn install

COPY . .

RUN yarn build