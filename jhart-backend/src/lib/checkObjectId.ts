import { Context, Next } from 'koa';
import mongoose from 'mongoose';

const { ObjectId } = mongoose.Types;

const checkObjectId = (ctx: Context, next: Next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad Request
    return;
  }
  return next();
};

export default checkObjectId;
