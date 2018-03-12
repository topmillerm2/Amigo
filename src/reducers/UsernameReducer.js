// RELATIVE
import {
	USERNAME_INPUT,
	USERNAME_SAVE,
	USERNAME_FETCH
} from '../actions/types';

const INITIAL_STATE = {
	username: null,
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case USERNAME_INPUT:
			return { ...state, username: action.payload };
		case USERNAME_SAVE:
			return INITIAL_STATE;
		case USERNAME_FETCH:
			return { ...state, username: action.payload };
		default:
			return state;
	}
}