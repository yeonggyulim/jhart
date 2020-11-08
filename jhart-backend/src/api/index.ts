import Router from 'koa-router';
import categories from './categories';
import posts from './posts';
import careers from './careers';
import auth from './auth';

const api = new Router();

api.use('/categories', categories.routes());
api.use('/posts', posts.routes());
api.use('/careers', careers.routes());
api.use('/auth', auth.routes());

// 라우터를 내보냅니다.
export default api;
