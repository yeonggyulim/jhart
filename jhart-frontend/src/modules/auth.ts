//Action Type
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';

export type Field = {
	form: 'register' | 'login';
	key: 'username' | 'password' | 'passwordConfirm';
	value: string;
};

export type ChangeFieldAction = {
	type: typeof CHANGE_FIELD;
	payload: Field;
};

//Action Creators
export const changeField = (field: Field): ChangeFieldAction => {
	return {
		type: CHANGE_FIELD,
		payload: field,
	};
};

export type Form = {
	form: string;
};

export type InitializeFormAction = {
	type: typeof INITIALIZE_FORM;
	payload: Form;
};

export const initalizeForm = (form: Form): InitializeFormAction => {
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
		case INITIALIZE_FORM:
		default:
			return state;
	}
};

export default auth;
