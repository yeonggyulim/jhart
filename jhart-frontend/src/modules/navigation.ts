import { Navigation } from '../constants/navigation';

// Action Type
const CHANGE_NAVIGATION = 'navigation/CHANGE_NAVIGATION' as const;

// Action Creators
export const changeNavigation = (navigation: Navigation) => ({
  type: CHANGE_NAVIGATION,
  payload: navigation,
});

// Action Object Type
type NavigationAction = ReturnType<typeof changeNavigation>;

// State Type
type NavigationState = {
	navigation: Navigation;
};

// Initial State
const initialState: NavigationState = {
  navigation: Navigation.Home,
};

// Reducer
const navigation = (
  state: NavigationState = initialState,
  action: NavigationAction,
) => {
  switch (action.type) {
  case CHANGE_NAVIGATION:
    return { navigation: action.payload };
  default:
    return state;
  }
};

export default navigation;
