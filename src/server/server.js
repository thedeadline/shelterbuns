import Koa from 'koa';
import React from 'react';
import App from '../components/App';

const server = new Koa();

server.use(async ctx => {
  ctx.body = 'Hello World';
});

server.listen(3000, () => console.log('Server is running on port 3000: http://localhost:4242/...'));
