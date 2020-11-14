import { combineReducers } from 'redux';
import categories, { categorySaga } from './categories';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
	categories,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;

export function* rootSaga() {
	yield all([categorySaga()]);
}
