#!/bin/bash

# Necesario para que el bash tenga acceso a nvm, node, npm, yarn, etc...
set -e
set -u
export NODE_VERSION="16"
echo "--> Selecting Node version $NODE_VERSION"
. $HOME/.nvm/nvm.sh
nvm use $NODE_VERSION \

# Se configura cómo correrá la app
echo "Subiendo front" \

echo '= USANDO NVM VERSION: ='
nvm --version
echo '= USANDO NODE VERSION: ='
node -v \

yarn generate &&
aws s3 rm s3://staticboricpresidente --recursive &&
aws s3 cp ./dist s3://staticboricpresidente --acl 'public-read' --recursive