// Login
import {
    LOGIN__SUCCEEDED,
    LOGIN__FAILED,
} from './login';

const initialState = {

    isAuthenticated: false,
    user: {},

    alertBar: {
        isDisplay: false,
        isError: false,
        message: ''
    },
    
};

const rootReducer = (previousState = initialState, { type, payload }) => {
    
    let updated = Object.assign({}, previousState);
    switch (type) {

        case LOGIN__SUCCEEDED:
            updated.isAuthenticated = true;
            updated.user = payload.User;
            return updated;

        default:
            return previousState;
    }
};

export default rootReducer;
