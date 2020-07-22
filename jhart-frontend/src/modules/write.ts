import { createAction, handleActions } from 'redux-actions';

//Action Type
const INITIALIZE = 'write/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; // 특정 key 값 바꾸기

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
};

export type FieldType = {
	key: KeyType;
	value: string;
};

// Action Types
type changeFieldAction = ReturnType<typeof writeActions.changeField>;

const initialState = {
	title: '',
	body: '',
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
	},
	initialState,
);

export default write;
