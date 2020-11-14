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
	category: {
		loading: false,
		error: null,
		data: null,
	},
};

const categories = createReducer<CategoryState, CategoryAction>(initialState, {
	[GET_CATEGORY_LIST]: (state) => ({
		...state,
		category: {
			loading: true,
			error: null,
			data: null,
		},
	}),
	[GET_CATEGORY_LIST_SUCCESS]: (state, action) => ({
		...state,
		category: {
			loading: false,
			error: null,
			data: action.payload,
		},
	}),
	[GET_CATEGORY_LIST_FAILURE]: (state, action) => ({
		...state,
		category: {
			loading: false,
			error: action.payload,
			data: null,
		},
	}),
	[PUT_CATEGORY_LIST]: (state) => ({
		...state,
		category: {
			loading: true,
			error: null,
			data: null,
		},
	}),
	[PUT_CATEGORY_LIST_SUCCESS]: (state, action) => ({
		...state,
		category: {
			loading: false,
			error: null,
			data: action.payload,
		},
	}),
	[PUT_CATEGORY_LIST_FAILURE]: (state, action) => ({
		...state,
		category: {
			loading: false,
			error: action.payload,
			data: null,
		},
	}),
});

export default categories;
