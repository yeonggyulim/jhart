import { createAction, handleActions } from 'redux-actions';
import createReqeustSaga, {
	createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';

//Action Type
const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기
const [
	WRITE_POST,
	WRITE_POST_SUCCESS,
	WRITE_POST_FAILURE,
] = createRequestActionTypes('wrtie/WRITE_POST'); // 포스트 작성

// Action Creators
export const writeActions = {
	initialize: createAction(INITIALIZE),
	changeField: createAction<FieldType, FieldType>(
		CHANGE_FIELD,
		({ key, value }) => ({
			key,
			value,
		}),
	),
	writePost: createAction<postsAPI.PostType, postsAPI.PostType>(
		WRITE_POST,
		({ title, body, categories }) => ({
			title,
			body,
			categories,
		}),
	),
};

export type FieldType = {
	key: KeyType;
	value: string;
};

// Action Types
type changeFieldAction = ReturnType<typeof writeActions.changeField>;
// type writePostAction = ReturnType<typeof writeActions.writePost>;

// 사가 생성
const writePostSaga = createReqeustSaga(WRITE_POST, postsAPI.writePost);
export function* writeSaga() {
	yield takeLatest(WRITE_POST, writePostSaga);
}

const initialState = {
	title: '',
	body: '',
	post: null,
	postError: null,
};

const write = handleActions(
	{
		[INITIALIZE]: state => initialState, // 초기 상태로 바꿈
		[CHANGE_FIELD]: (
			state,
			{ payload: { key, value } }: changeFieldAction,
		) => ({
			...state,
			[key]: value,
		}),
		[WRITE_POST]: state => ({
			...state,
			// post와 postError를 초기화
			post: null,
			postError: null,
		}),
		[WRITE_POST_SUCCESS]: (state, { payload: posts }: any) => ({
			...state,
			posts,
		}),
		[WRITE_POST_FAILURE]: (state, { payload: postError }: any) => ({
			...state,
			postError,
		}),
	},
	initialState,
);

export default write;
