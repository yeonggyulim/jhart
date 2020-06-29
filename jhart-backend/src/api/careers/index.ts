import Router from 'koa-router';
import * as careersCtrl from './careers.ctrl';
import checkLoggedIn from '../../lib/checkLoggedIn';
import checkObjectId from '../../lib/checkObjectId';

const careers = new Router();

careers.post('/', checkLoggedIn, careersCtrl.write);
careers.get('/', careersCtrl.list);
careers.get('/:id', checkObjectId, careersCtrl.getCareerById, careersCtrl.read);
careers.delete(
  '/:id',
  checkLoggedIn,
  checkObjectId,
  careersCtrl.getCareerById,
  careersCtrl.checkOwnCareer,
  careersCtrl.remove,
);
careers.patch(
  '/:id',
  checkLoggedIn,
  checkObjectId,
  careersCtrl.getCareerById,
  careersCtrl.checkOwnCareer,
  careersCtrl.update,
);

export default careers;
