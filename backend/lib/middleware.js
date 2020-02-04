const compose = require('koa-compose');
const logger = require('koa-logger');
const cors = require('@koa/cors');
const bodyparser = require('koa-bodyparser');


function middleware() {
  return compose([
    logger(),
    cors(),
    bodyparser(),
  ]);
}

module.exports = middleware;
