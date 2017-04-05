#!/usr/bin/env bash

docker stop db && docker rm db
docker stop 3-express && docker rm 3-express