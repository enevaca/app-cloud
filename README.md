# App Cloud

## Instalación de Docker en Ubuntu 22.04
https://docs.docker.com/engine/install/ubuntu/

https://www.linuxtechi.com/install-use-docker-on-ubuntu/

$ sudo apt-get update

$ sudo apt-get install ca-certificates curl gnupg lsb-release

$ sudo mkdir -p /etc/apt/keyrings

$ curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

$ echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

$ sudo apt-get update

$ sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin docker-compose -y

$ sudo usermod -aG docker $USER

$ sudo usermod -aG docker $USER

$ newgrp docker

$ docker version

## Ejecutar los contenedores
$ git clone https://github.com/enevaca/app-cloud.git

$ cd app-cloud

$ docker-compose up -d

$ docker ps

$ ip addr

En el navegador web verificar el acceso a:

http://<IP_ADDRESS>:3000/apidoc

http://<IP_ADDRESS>:85

## Instalación Gravitee

sudo su

mkdir -p /gravitee/mongodb

mkdir -p /gravitee/mongodb/data

mkdir -p /gravitee/elasticsearch

mkdir -p /gravitee/elasticsearch/data

mkdir -p /gravitee/apim-gateway

mkdir -p /gravitee/apim-gateway/plugins

mkdir -p /gravitee/apim-gateway/logs

mkdir -p /gravitee/apim-management-api

mkdir -p /gravitee/apim-management-api/plugins

mkdir -p /gravitee/apim-management-api/logs

mkdir -p /gravitee/apim-management-ui

mkdir -p /gravitee/apim-management-ui/logs

mkdir -p /gravitee/apim-portal-ui

mkdir -p /gravitee/apim-portal-ui/logs

sudo chown -R $USER:$USER /gravitee

$ mkdir ~/gravitee

$ cd ~/gravitee

$ curl -L https://raw.githubusercontent.com/gravitee-io/gravitee-docker/master/apim/3.x/docker-compose.yml -o "docker-compose.yml"

$ docker-compose up -d

Acceder a http://<IP_ADDRESS>:8084 con admin admin
