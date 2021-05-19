import { createStore } from 'redux';
import mainReducer from '../reducers';

export const initialState = {
	fav: {
		jobs: [],
	},
};

export default createStore(
	mainReducer,
	initialState,
	window.__REDUX_DEVTOOLS__EXTENSION && window.__REDUX_DEVTOOLS__EXTENSION()
);
