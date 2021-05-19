import { initialState } from '../store';

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'ADD_TO_FAV':
			return {
				...state,
				fav: { ...state.fav, jobs: state.fav.jobs.concat(action.payload) },
			};

		case 'REMOVE_FROM_FAV':
			return {
				...state,
				cart: {
					...state.cart,
					products: state.fav.jobs.filter((job, i) => i !== action.payload),
				},
			};
		case 'SET_USERNAME':
			return {
				...state,
				user: {
					...state.user,
					firstName: action.payload,
				},
			};

		default:
			return state;
	}
};

export default mainReducer;
