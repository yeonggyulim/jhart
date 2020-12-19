import { createReducer } from 'typesafe-actions';
import { CategoryAction, CategoryState } from './types';
import {
	GET_CATEGORY_LIST,
	GET_CATEGORY_LIST_FAILURE,
	GET_CATEGORY_LIST_SUCCESS,
	PUT_CATEGORY_LIST,
	PUT_CATEGORY_LIST_FAILURE,
	PUT_CATEGORY_LIST_SUCCESS,
} from './actions';

const initialState: CategoryState = {
	loading: false,
	error: null,
	data: null,
};

const categories = createReducer<CategoryState, CategoryAction>(initialState, {
	[GET_CATEGORY_LIST]: (state) => ({
		...state,
		loading: true,
		error: null,
	}),
	[GET_CATEGORY_LIST_SUCCESS]: (state, action) => ({
		...state,
		loading: false,
		data: action.payload,
	}),
	[GET_CATEGORY_LIST_FAILURE]: (state, action) => ({
		...state,
		loading: false,
		error: action.payload,
	}),
	[PUT_CATEGORY_LIST]: (state) => ({
		...state,
		loading: true,
		error: null,
	}),
	[PUT_CATEGORY_LIST_SUCCESS]: (state, action) => ({
		...state,
		loading: false,
		data: action.payload,
	}),
	[PUT_CATEGORY_LIST_FAILURE]: (state, action) => ({
		...state,
		loading: false,
		error: action.payload,
	}),
});

export default categories;
