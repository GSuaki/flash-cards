#!/bin/bash
sudo chmod 775 -R ~/.flashcards

MYSQL_DATA="$HOME/.flashcards/data/flashcards"
MYSQL_CENTRAL_DATABASE=flashcards
DOCKER_NAME=flashcards

MYSQL_ROOT_PASSWORD=123456

if [ ! -d "$MYSQL_DATA" ]; then
  mkdir -p $MYSQL_DATA
fi

docker stop $DOCKER_NAME

docker rm $DOCKER_NAME

docker run --name $DOCKER_NAME \
  -p 3307:3306 \
  -v $MYSQL_DATA:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD \
  -e MYSQL_DATABASE=$MYSQL_CENTRAL_DATABASE \
  -d mysql:5.6

echo "waiting mysql startup..."
sleep 30
