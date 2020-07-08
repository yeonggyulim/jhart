import { createAction, handleActions } from 'redux-actions';
import { takeLatest } from 'redux-saga/effects';
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

// Action Creators
export const userActions = {
	// createAction<payload 타입, ...액션 생성함수의 파라미터들>
	tempSetUser: createAction<string, string>(TEMP_SET_USER, user => user),
	check: createAction(CHECK),
};

const checkSaga = createRequestSaga(CHECK, authAPI.check);
export function* userSaga() {
	yield takeLatest(CHECK, checkSaga);
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
	},
	initialState,
);

export default user;
