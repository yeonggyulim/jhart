import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {
	createRequestActionTypes,
} from '../lib/createRequestSaga';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth';
import produce from 'immer';

//Action Type
const CHANGE_FIELD = 'auth/CHANGE_FIELD' as const;
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM' as const;
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
	'auth/REGISTER',
);
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
	'auth/LOGIN',
);

// Action Creators
export const authActions = {
	// createAction<payload 타입, ...액션 생성함수의 파라미터들>
	changeField: createAction<FieldType, FieldType>(
		CHANGE_FIELD,
		({ form, key, value }) => ({
			form,
			key,
			value,
		}),
	),
	initializeForm: createAction<FormType, FormType>(
		INITIALIZE_FORM,
		form => form,
	),
	register: createAction<AuthType, AuthType>(
		REGISTER,
		({ username, password }) => ({
			username,
			password,
		}),
	),
	login: createAction<AuthType, AuthType>(LOGIN, ({ username, password }) => ({
		username,
		password,
	})),
};

export type KeyType = 'username' | 'password' | 'passwordConfirm';
export type FormType = 'register' | 'login';
export type FieldType = {
	form: FormType;
	key: KeyType;
	value: string;
};

export type AuthType = {
	username: string;
	password: string;
};

// Action Types
type changeFieldAction = ReturnType<typeof authActions.changeField>;
type initializeFormAction = ReturnType<typeof authActions.initializeForm>;
type registerAction = ReturnType<typeof authActions.register>;
type loginAction = ReturnType<typeof authActions.login>;

// 사가 생성
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
export function* authSaga() {
	yield takeLatest(REGISTER, registerSaga);
	yield takeLatest(LOGIN, loginSaga);
}

export type AuthState = {
	register: {
		username: string;
		password: string;
		passwordConfirm: string;
	};
	login: {
		username: string;
		password: string;
		passwordConfirm?: string;
	};
	auth: string | null;
	authError: any;
};

const initialState: AuthState = {
	register: {
		username: '',
		password: '',
		passwordConfirm: '',
	},
	login: {
		username: '',
		password: '',
	},
	auth: null,
	authError: null,
};

// Reducers
const auth = handleActions<AuthState, any>(
	{
		[CHANGE_FIELD]: (
			state,
			{ payload: { form, key, value } }: changeFieldAction,
		) =>
			produce(state, draft => {
				draft[form][key] = value;
			}),
		[INITIALIZE_FORM]: (state, { payload: form }: initializeFormAction) => ({
			...state,
			[form]: initialState[form],
			authError: null, // 폼 전환 시 회원 인증 에러 초기화
		}),
		[REGISTER_SUCCESS]: (state, { payload: auth }) => ({
			...state,
			authError: null,
			auth,
		}),
		[REGISTER_FAILURE]: (state, { payload: error }) => ({
			...state,
			authError: error,
		}),
		[LOGIN_SUCCESS]: (state, { payload: auth }) => ({
			...state,
			authError: null,
			auth,
		}),
		[LOGIN_FAILURE]: (state, { payload: error }) => ({
			...state,
			authError: error,
		}),
	},
	initialState,
);

export default auth;
