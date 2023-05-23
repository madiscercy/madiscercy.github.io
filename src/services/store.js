import { createStore } from 'redux';

const initialState = {
	page: 'about',
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'ABOUT_ME':
			return { ...state, page: 'about' };
		case 'PORTFOLIO':
			return { ...state, page: 'portfolio' };
		case 'RESUME':
			return { ...state, page: 'resume' };
		default:
			return state;
	}
}

const store = createStore(reducer);

export default store;
