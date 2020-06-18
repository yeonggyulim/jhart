import Router from 'koa-router';
import * as postsCtrl from './posts.ctrl';

const posts = new Router();


posts.post('/', postsCtrl.write);
posts.get('/:categories', postsCtrl.list);
posts.get('/:categories/:id', postsCtrl.read);
posts.delete('/:id', postsCtrl.remove);
posts.patch('/:categories/:id', postsCtrl.update);

export default posts;