const Koa = require('koa');
const middleware = require('./middleware');
const app = new Koa();

//middleware
app.use(middleware());

//error handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.message;
    ctx.app.emit('error', err, ctx);
  }
});

module.exports = app;
