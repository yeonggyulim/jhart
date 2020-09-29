import { createAction, handleActions } from 'redux-actions';

// Action Type
const START_LOADING = 'loading/START_LOADING' as const;
const FINISH_LOADING = 'loading/FINISH_LOADING' as const;

// Action Creators
export const loadingActions = {
	// createAction<payload 타입, ...액션 생성함수의 파라미터들>
	startLoading: createAction<string, string>(
		START_LOADING,
		requestType => requestType,
	),
	finishLoading: createAction<string, string>(
		FINISH_LOADING,
		requestType => requestType,
	),
};

// Action Types
export type StartLoadingAction = ReturnType<typeof loadingActions.startLoading>;
export type FinishLoadingAction = ReturnType<
	typeof loadingActions.finishLoading
>;

export type LoadingState = {
	[key: string]: boolean;
};

const initialState: LoadingState = {};

// reducers
const loading = handleActions<LoadingState, any>(
	{
		[START_LOADING]: (state, action: StartLoadingAction) => ({
			...state,
			[action.payload]: true,
		}),
		[FINISH_LOADING]: (state, action: FinishLoadingAction) => ({
			...state,
			[action.payload]: false,
		}),
	},
	initialState,
);

export default loading;
