import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import navigation from './navigation';
import auth, { authSaga } from './auth';
import loading from './loading';
import user, { userSaga } from './user';

const rootReducers = combineReducers({
	navigation,
	auth,
	loading,
	user,
});

export function* rootSaga() {
	yield all([authSaga(), userSaga()]);
}

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
