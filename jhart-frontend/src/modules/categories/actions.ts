import { createAsyncAction } from 'typesafe-actions';
import { Category } from '../../apis/category';
import { AxiosError } from 'axios';

export const GET_CATEGORY_LIST = 'categories/GET_CATEGORY_LIST';
export const GET_CATEGORY_LIST_SUCCESS = 'categories/GET_CATEGORY_LIST_SUCCESS';
export const GET_CATEGORY_LIST_FAILURE = 'categories/GET_CATEGORY_LIST_FAILURE';

export const PUT_CATEGORY_LIST = 'categories/PUT_CATEGORY_LIST';
export const PUT_CATEGORY_LIST_SUCCESS = 'categories/PUT_CATEGORY_LIST_SUCCESS';
export const PUT_CATEGORY_LIST_FAILURE = 'categories/PUT_CATEGORY_LIST_FAILURE';

export const getCategoryListAsync = createAsyncAction(
	GET_CATEGORY_LIST,
	GET_CATEGORY_LIST_SUCCESS,
	GET_CATEGORY_LIST_FAILURE,
)<undefined, Category[], AxiosError>();

export const putCategoryListAsync = createAsyncAction(
	PUT_CATEGORY_LIST,
	PUT_CATEGORY_LIST_SUCCESS,
	PUT_CATEGORY_LIST_FAILURE,
)<Category[], Category[], AxiosError>();
