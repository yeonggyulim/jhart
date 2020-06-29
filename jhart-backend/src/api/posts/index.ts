import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';
import checkObjectId from '../../lib/checkObjectId';

const posts = new Router();

posts.post('/', checkLoggedIn, postsCtrl.write);
posts.get('/:categories', postsCtrl.list);
posts.get(
  '/:categories/:id',
  checkObjectId,
  postsCtrl.getPostById,
  postsCtrl.read,
);
posts.delete(
  '/:id',
  checkLoggedIn,
  checkObjectId,
  postsCtrl.getPostById,
  postsCtrl.checkOwnPost,
  postsCtrl.remove,
);
posts.patch(
  '/:id',
  checkLoggedIn,
  checkObjectId,
  postsCtrl.getPostById,
  postsCtrl.checkOwnPost,
  postsCtrl.update,
);

export default posts;
