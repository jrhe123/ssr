// Login
import {
    LOGIN__SUCCEEDED,
    LOGIN__FAILED,
} from './login';

// Dashboard
import {
    LOGOUT__SUCCEEDED,
    LOGOUT__FAILED,
} from './dashboard';

// Global
import {
    VALIDATE_TOKEN__SUCCEEDED,
    VALIDATE_TOKEN__FAILED,

    NAVIGATE_HISTORY__SUCCEEDED,
    NAVIGATE_HISTORY__FAILED,
} from './constants';

const initialState = {

    history: null,
    isAuthenticated: false,
    user: {},

    alertBar: {
        isDisplay: false,
        isError: false,
        message: ''
    }
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

        case VALIDATE_TOKEN__SUCCEEDED:
            updated.isAuthenticated = true;
            updated.user = payload.user;
            return updated;

        case VALIDATE_TOKEN__FAILED:
            updated.isAuthenticated = false;
            updated.user = {};
            return updated;

        case NAVIGATE_HISTORY__SUCCEEDED:
            updated.history = payload.history;
            return updated;

        default:
            return previousState;
    }
};

export default rootReducer;
