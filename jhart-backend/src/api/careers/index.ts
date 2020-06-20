import Router from 'koa-router';
import * as careersCtrl from './careers.ctrl';

const careers = new Router();

careers.post('/', careersCtrl.write);
careers.get('/', careersCtrl.list);
careers.delete('/:id', careersCtrl.remove);
careers.patch('/:id', careersCtrl.update);

export default careers;