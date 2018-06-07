// Login
import {
    LOGIN__SUCCEEDED,
    LOGIN__FAILED,
} from './login';

// Logout
import {
    LOGOUT__SUCCEEDED,
    LOGOUT__FAILED,

    VALIDATE_TOKEN__FAILED,
} from './dashboard';

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
            updated.user = payload.user;
            return updated;
        
        case LOGOUT__SUCCEEDED:
            updated.isAuthenticated = false;
            updated.user = {};
            return updated;

        case VALIDATE_TOKEN__FAILED:
            updated.isAuthenticated = false;
            updated.user = {};
            return updated;

        default:
            return previousState;
    }
};

export default rootReducer;
