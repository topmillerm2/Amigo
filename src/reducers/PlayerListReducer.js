// RELATIVE
import { PLAYERS_FETCH, PLAYER_SELECTED, FAIL_SELECT } from '../actions/types';

const INITIAL_STATE = {
	players: null, 
	selectedPlayer: null,
	error: null	
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case PLAYERS_FETCH:
			return { ...state, players: action.payload };
		case PLAYER_SELECTED:
			return { ...state, selectedPlayer: action.payload };
		case FAIL_SELECT:
			return { ...state, error: action.payload };
		default:
			return state;
	}
};