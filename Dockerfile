FROM node:12.17-alpine
WORKDIR /app
RUN apk update
RUN apk add bash=5.0.11-r1 --no-cache
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
COPY . ./