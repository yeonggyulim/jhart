import { Context } from 'koa';
import Career from '../../models/career';

/* 커리어 작성
POST /api/careers
{ 
    year: '연도',
    career: '연혁',
}
*/
export const write = async (ctx: any) => {
  // REST API의 Request Body는 ctx.request.body에서 조회할 수 있습니다.
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
    const careers = await Career.find().exec();
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
