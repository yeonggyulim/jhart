import { combineReducers } from 'redux';
import navigation from './navigation';

const rootReducers = combineReducers({
    navigation
});

export default rootReducers;

export type RootState = ReturnType<typeof rootReducers>;
