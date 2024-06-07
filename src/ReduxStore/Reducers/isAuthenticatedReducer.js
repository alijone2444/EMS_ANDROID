// reducers.js
const initialState = {
    isAuthenticated: false,
};

const IsAuthenticatedReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_AUTHENTICATED':
            return {
                ...state,
                isAuthenticated: action.payload,
            };
        default:
            return state;
    }
};

export default IsAuthenticatedReducer;
