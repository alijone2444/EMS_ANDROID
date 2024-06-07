// headerOptionReducer.js

import { SET_HEADER_OPTION } from "../actions/headerOptionAction";

const initialState = {
    option: '', // Initial state for header option
};

const headerOptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_HEADER_OPTION:
            return {
                ...state,
                option: action.payload, // Update header option based on action payload
            };
        default:
            return state;
    }
};

export default headerOptionReducer;
