//Action Type
const CHANGE_FIELD = 'auth/CHANGE_FIELD' as const;
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM' as const;

export type KeyType = 'username' | 'password' | 'passwordConform';

export type Field = {
	form: 'register' | 'login';
	key: KeyType;
	value: string;
};

export type ChangeFieldAction = {
	type: typeof CHANGE_FIELD;
	payload: Field;
};

export type Form = 'register' | 'login';

export type InitializeFormAction = {
	type: typeof INITIALIZE_FORM;
	payload: Form;
};

//Action Creators
export const changeField = (field: Field): ChangeFieldAction => {
	return {
		type: CHANGE_FIELD,
		payload: field,
	};
};

export const initializeForm = (form: Form): InitializeFormAction => {
	return {
		type: INITIALIZE_FORM,
		payload: form,
	};
};

export type FormState = {
	register: {
		username: string;
		password: string;
		passwordConfirm: string;
	};
	login: {
		username: string;
		password: string;
	};
};

const initialState: FormState = {
	register: {
		username: '',
		password: '',
		passwordConfirm: '',
	},
	login: {
		username: '',
		password: '',
	},
};

//Reducers
const auth = (
	state: FormState = initialState,
	action: ChangeFieldAction | InitializeFormAction,
) => {
	switch (action.type) {
		case CHANGE_FIELD:
			if (action.payload.form === 'register') {
				return {
					...state,
					[action.payload.form]: {
						...state.register,
						[action.payload.key]: action.payload.value, // 예: state.register.username 바꿈
					},
				};
			} else if (action.payload.form === 'login') {
				return {
					...state,
					[action.payload.form]: {
						...state.login,
						[action.payload.key]: action.payload.value, // 예: state.register.username 바꿈
					},
				};
			}
			return state;
		case INITIALIZE_FORM:
			return {
				...state,
				[action.payload]: initialState[action.payload],
			};
		default:
			return state;
	}
};

export default auth;
