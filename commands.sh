#!/bin/bash
git init
echo "node_modules" > .gitignore

npm init -y
npm i -s express
npm i -save-dev mocha chai request

mkdir src
mkdir test

touch src/server.js
touch src/converter.js

touch test/server.spec.js
touch test/converter.spec.js



