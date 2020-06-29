import { Context, Next } from 'koa';
import Post from '../../models/post';
import Joi from 'joi';

export const getPostById = async (ctx: Context, next: Next) => {
  const { id } = ctx.params;
  try {
    const post = await Post.findById(id).exec();
    if (!post) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.state.post = post;
    return next();
  } catch (e) {
    ctx.throw(500, e);
  }
};

export const checkOwnPost = (ctx: Context, next: Next) => {
  const { user, post } = ctx.state;
  if (post.user._id.toString() !== user._id) {
    ctx.status = 403;
    return;
  }
  return next();
};

/* 포스트 작성
POST /api/posts
{ 
    title: '제목',
    body: '내용',
    categories: '카테고리'
}
*/
export const write = async (ctx: Context) => {
  const schema = Joi.object().keys({
    // 객체가 다음 필드 가지고 있음을 검증
    title: Joi.string().required(),
    body: Joi.string().required(),
    categories: Joi.string().required(),
  });

  // 검증 후 실패 => 에러 처리
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { title, body, categories } = ctx.request.body;
  const post = new Post({
    title,
    body,
    categories,
    user: ctx.state.user,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 해당 카테고리의 포스트 목록 조회
GET /api/posts/:categories?page=
*/
export const list = async (ctx: Context) => {
  const { categories } = ctx.params;
  // query는 문자열 => 숫자로 변환
  // default : 1
  const page = parseInt(ctx.query.page || '1', 10);
  if (page < 1) {
    ctx.status = 400;
    return;
  }

  try {
    const posts = await Post.find({ categories })
      .sort({ _id: -1 })
      .limit(10)
      .skip((page - 1) * 10)
      .exec();
    const postCount = await Post.countDocuments().exec();
    ctx.set('Last-Page', Math.ceil(postCount / 10).toString());
    if (!posts) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.body = posts
      .map((post) => post.toJSON())
      .map((post) => ({
        ...post,
        body:
          post.body.length < 200 ? post.body : `${post.body.slice(0, 200)}...`,
      }));
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 특정 포스트 조회
GET /api/posts/:categories/:id
*/
export const read = async (ctx: Context) => {
  ctx.body = ctx.state.post;
};

/* 특정 포스트 제거
DELETE /api/posts/:id
*/
export const remove = async (ctx: Context) => {
  const { id } = ctx.params;
  try {
    await Post.findByIdAndRemove(id).exec();
    ctx.status = 204; // No Content (성공, but 응답 데이터 X)
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 포스트 수정(특정 필드 변경)
PATCH /api/posts/:id
{ 
    title: '수정 제목',
    body: '수정 내용',
    categories: '수정 카테고리'
}
*/
export const update = async (ctx: Context) => {
  const schema = Joi.object().keys({
    // 객체가 다음 필드 가지고 있음을 검증
    title: Joi.string(),
    body: Joi.string(),
    categories: Joi.string().forbidden(),
  });

  // 검증 후 실패 => 에러 처리
  const result = Joi.validate(ctx.request.body, schema);
  if (result.error) {
    ctx.status = 400; // Bad Request
    ctx.body = result.error;
    return;
  }

  const { id } = ctx.params;
  try {
    const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
      new: true, // 업데이트된 데이터 반환
    }).exec();
    if (!post) {
      ctx.status = 404;
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};
