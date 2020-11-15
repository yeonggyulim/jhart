import {
	getCategoryListAsync,
	putCategoryListAsync,
	GET_CATEGORY_LIST,
	PUT_CATEGORY_LIST,
} from './actions';
import { categoryApi, Category } from '../../apis/category';
import { call, put, takeEvery } from 'redux-saga/effects';

export function* getCategorySaga() {
	try {
		const categories: Category[] = yield call(categoryApi.get);
		yield put(getCategoryListAsync.success(categories));
	} catch (e) {
		yield put(getCategoryListAsync.failure(e));
	}
}

export function* putCategorySaga(
	action: ReturnType<typeof putCategoryListAsync.request>,
) {
	try {
		const categories: Category[] = yield call(categoryApi.put, action.payload);
		yield put(putCategoryListAsync.success(categories));
	} catch (e) {
		yield put(putCategoryListAsync.failure(e));
	}
}

export function* categorySaga() {
	yield takeEvery(GET_CATEGORY_LIST, getCategorySaga);
	yield takeEvery(PUT_CATEGORY_LIST, putCategorySaga);
}
