import Router from 'koa-router';
import posts from './posts';
import careers from './careers';

const api = new Router();

api.use('/posts', posts.routes());
api.use('/careers', careers.routes());

// 라우터를 내보냅니다.
export default api;