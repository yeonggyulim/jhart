import * as actions from './actions';
import { ActionType } from 'typesafe-actions';
import { Category } from '../../apis/category';

export type CategoryAction = ActionType<typeof actions>;

export type CategoryState = {
	category: {
		loading: boolean;
		error: Error | null;
		data: Category[] | null;
	};
};
