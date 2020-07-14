import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';

const rootReducers = combineReducers({
	auth,
	loading,
	user,
});

export function* rootSaga() {
	yield all([authSaga(), userSaga()]);
}

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
