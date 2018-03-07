import { QUESTION_CHOSEN, GAME_CREATED, FETCH_FIVE, RESET_GAME_KEY } from '../actions/types';
import { Actions } from 'react-native-router-flux';


const INITIAL_STATE = {
	selectedQuestion: null,
	lastFive: null,
	gameKey: null
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case QUESTION_CHOSEN:
			return { ...state, selectedQuestion: action.payload }
		case GAME_CREATED:
			return state
		case FETCH_FIVE:
			return { ...state, lastFive: action.payload.five, gameKey: action.payload.gameKey  }
		case RESET_GAME_KEY:
			return { ...state, gameKey: null }
		default:
			return state;
		}
};