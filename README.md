# rental-up.com

There's two way to set up.

## Set up with Docker

Make sure you have Docker installed on your PC.

```bash
$ docker -v
Docker version 19.03.13, build 4484c46d9d
$ docker-compose -v
docker-compose version 1.27.4, build 40524192
```

Execute the following commands.

```bash
$ git clone https://github.com/YopiNoji/rental-up.com.git
$ cd rental-up.com
$ docker-compose up -d --build
```

## Setup with Node.js

Make sure you have Node.js installed on your PC.

```bash
$ node -v
v12.17.0
```

Execute the following commands.

```bash
$ git clone https://github.com/YopiNoji/rental-up.com.git
$ cd rental-up.com
$ npm i
$ npm run start
```
