FROM golang:1.13.3-alpine3.10

# Environment app directory
ENV APP_DIR /go/src/github.com/NguyenHoaiPhuong/warehouse/server

# Create app directory
RUN mkdir -p ${APP_DIR}

# Set working directory in the image
WORKDIR ${APP_DIR}

# install git, bash and dep
RUN apk add --update --no-cache git && \
    apk add --no-cache bash && \
    go get -u github.com/golang/dep/cmd/dep

# COPY files from host to the present location (.) in your image
COPY . .

# Run dep ensure to install all dependencies specified in Gopkg
RUN dep ensure

# RUN cd ${APP_DIR} && \
#     go build && \
#     chmod u+x server

# ENTRYPOINT ["tail", "-f", "/dev/null"]