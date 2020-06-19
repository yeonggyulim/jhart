import { Context } from 'koa';
import Post from '../../models/post';

/* 포스트 작성
POST /api/posts
{ 
    title: '제목',
    body: '내용',
    categories: '카테고리'
}
*/
export const write = async (ctx: any) => {
  // REST API의 Request Body는 ctx.request.body에서 조회할 수 있습니다.
  const { title, body, categories } = ctx.request.body;
  const post = new Post({
    title,
    body,
    categories,
  });
  try {
    await post.save();
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 해당 카테고리의 포스트 목록 조회
GET /api/posts/:categories
*/

export const list = async (ctx: Context) => {
  const { categories } = ctx.params;
  try {
    const posts = await Post.find({ categories }).exec();
    if (!posts) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.body = posts;
  } catch (e) {
    ctx.throw(500, e);
  }
};

/* 특정 포스트 조회
GET /api/posts/:categories/:id
*/
export const read = async (ctx: Context) => {
  const { categories, id } = ctx.params;
  try {
    const post = await Post.find({ categories, _id: id }).exec();
    if (!post) {
      ctx.status = 404; // Not Found
      return;
    }
    ctx.body = post;
  } catch (e) {
    ctx.throw(500, e);
  }
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
export const update = async (ctx: any) => {
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
