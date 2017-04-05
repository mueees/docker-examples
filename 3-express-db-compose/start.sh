#!/usr/bin/env bash

docker run --name db -d -p 27017:27017 mongo
sleep 3
docker run --name 3-express -d -p 7777:7777 3-express