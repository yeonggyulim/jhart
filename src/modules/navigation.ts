import { createAction } from 'redux-actions';
import { Navigation } from '../constants/navigation';

const CHANGE_PAGE = 'navigation/CHANGE_PAGE';

export const changePage = createAction(CHANGE_PAGE, (page: Navigation) => page);

// const initialState = 