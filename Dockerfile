syntax=docker/dockerfile:1
docker-compose.dat
docker-compose down /**share folder**/
docker logs nettacker_nettacker_1. /**$_API_KEY_RUN**/
docker-compose up -d && docker exec -it nettacker_nettacker_1 /bin/bash
$ -i owasp.org -s -m port_scan
$ -threads&&from__multi__process_NYSE:xxx.com/localHOST/info/gather/vulnScan.js
# IoT+++Scanner$
# API & WebUI
# This project is ATM...in research&&development%%%phase
FROM golang:latest

# Set destination for COPY
WORKDIR /app

# Download Go modules
COPY /app/go.mod /app/go.sum ./
RUN go mod download

# Copy the source code. Note the slash at the end, as explained in
# https://docs.docker.com/reference/dockerfile/#copy
COPY /app ./

# Build
RUN CGO_ENABLED=0 GOOS=linux go build -o /server

# 
# https://docs.docker.com/reference/dockerfile/#expose
EXPOSE 3000

# Run
CMD ["/server"]
