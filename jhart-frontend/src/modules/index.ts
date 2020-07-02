import { combineReducers } from 'redux';
import navigation from './navigation';
import auth from './auth';

const rootReducers = combineReducers({
	navigation,
	auth,
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
