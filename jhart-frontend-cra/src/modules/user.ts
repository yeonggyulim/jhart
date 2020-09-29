import { createAction, handleActions } from 'redux-actions';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import createRequestSaga, {
	createRequestActionTypes,
} from '../lib/createRequestSaga';

// Action Type
const TEMP_SET_USER = 'user/TEMP_SET_USER' as const; // 새로고침 이후 임시 로그인 처리
// 회원 정보 확인
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
	'user/CHECK',
);
const LOGOUT = 'user/LOGOUT';

// Action Creators
export const userActions = {
	// createAction<payload 타입, ...액션 생성함수의 파라미터들>
	tempSetUser: createAction<string, string>(TEMP_SET_USER, user => user),
	check: createAction(CHECK),
	logout: createAction(LOGOUT),
};

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga() {
	try {
		localStorage.removeItem('user'); // localStorage에서 user를 제거
	} catch (e) {
		console.log('localStorage is not working');
	}
}

function* logoutSaga() {
	try {
		yield call(authAPI.logout); // logout API 호출
		localStorage.removeItem('user'); // localStorage에서 user를 제거
	} catch (e) {
		console.log(e);
	}
}

export function* userSaga() {
	yield takeLatest(CHECK, checkSaga);
	yield takeLatest(CHECK_FAILURE, checkFailureSaga);
	yield takeLatest(LOGOUT, logoutSaga);
}

export type UserState = {
	user: string | null;
	checkError: Error | null;
};

const initialState = {
	user: null,
	checkError: null,
};

const user = handleActions<UserState, any>(
	{
		[TEMP_SET_USER]: (state, { payload: user }) => ({
			...state,
			user,
		}),
		[CHECK_SUCCESS]: (state, { payload: user }) => ({
			...state,
			user,
			checkError: null,
		}),
		[CHECK_FAILURE]: (state, { payload: error }) => ({
			...state,
			user: null,
			checkError: error,
		}),
		[LOGOUT]: state => ({
			...state,
			user: null,
		}),
	},
	initialState,
);

export default user;
