export const addToCartAction = (job) => ({
	// we need to pass an action here
	type: 'ADD_TO_FAV',
	payload: job,
});

export const removeFromCartAction = (index) => ({
	// we need to pass an action here
	type: 'REMOVE_FROM_FAV',
	payload: index,
});

export const setUserNameAction = (username) => ({
	type: 'SET_USERNAME',
	payload: username,
});
