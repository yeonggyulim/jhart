import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import navigation from './navigation';
import auth, { authSaga } from './auth';
import loading from './loading';

const rootReducers = combineReducers({
	navigation,
	auth,
	loading,
});

export function* rootSaga() {
	yield all([authSaga()]);
}

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
