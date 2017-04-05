#!/usr/bin/env bash

docker run --name db -d -p 27017:27017 mongo
sleep 3
node index.js