const initialState = 0;

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		case 'INCREMENT_BY_10':
			return state + 10;
		case 'DECREMENT_BY_10':
			return state - 10;
		case 'RESET':
			return 0;
		default:
			return state;
	}
};

export default counterReducer;