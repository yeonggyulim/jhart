import { Context, Next } from 'koa';
import Career from '../../models/career';
import mongoose from 'mongoose';
import Joi from 'joi';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx: Context, next: Next) => {
  const { id } = ctx.params;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400; // Bad Request
    return;
  }
  return next();
};

/* 커리어 작성
POST /api/careers
{ 
    year: '연도',
    history: '연혁',
}
*/
export const write = async (ctx: Context) => {
  const schema = Joi.object().keys({
    year: Joi.number().required(),
    history: Joi.string().required(),
  });

  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { year, history } = ctx.request.body;
  const career = new Career({
    year,
    history,
  });
  try {
    await career.save();
    ctx.body = career;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 커리어 목록 조회
GET /api/careers
*/
export const list = async (ctx: Context) => {
  try {
    const careers = await Career.find().sort({ year: -1, _id: -1 }).exec();
    ctx.body = careers;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 특정 커리어 제거
DELETE /api/careers/:id
*/
export const remove = async (ctx: Context) => {
  const { id } = ctx.params;
  try {
    await Career.findByIdAndRemove(id).exec();
    ctx.status = 204; // No Content (성공하기는 했지만 응답할 데이터는 없음)
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 특정 커리어 수정
PATCH /api/careers/:id
*/
export const update = async (ctx: Context) => {
  const schema = Joi.object().keys({
    year: Joi.number(),
    history: Joi.string(),
  });

  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { id } = ctx.params;
  try {
    const career = await Career.findByIdAndUpdate(id, ctx.request.body, {
      new: true,
    }).exec();
    if (!career) {
      ctx.status = 404;
      return;
    }
    ctx.body = career;
  } catch (e) {
    ctx.throw(500, e);
  }
};
