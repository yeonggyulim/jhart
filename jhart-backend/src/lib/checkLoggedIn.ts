import { Context, Next } from 'koa';

const checkLoggedIn = (ctx: Context, next: Next) => {
  if (!ctx.state.user) {
    ctx.status = 401; // Unauthorized
    return;
  }
  return next();
};

export default checkLoggedIn;
