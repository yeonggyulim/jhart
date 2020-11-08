import Router from 'koa-router';
import * as categoriesCtrl from './categories.ctrl';

const categories = new Router();

categories.put('/', categoriesCtrl.write);
categories.get('/', categoriesCtrl.read);

export default categories;
