// Login
import {
    LOGIN__SUCCEEDED,
    LOGIN__FAILED,
} from './login';

// Global
import {
    
    NAVIGATE_HISTORY__SUCCEEDED,
    NAVIGATE_HISTORY__FAILED,

    ALERT__SUCCEEDED,
    LOADING__SUCCEEDED,
} from './constants';

const initialState = {

    history: null,
    isAuthenticated: false,
    user: {},

    alertBar: {
        isDisplay: false,
        isError: false,
        message: ''
    },

    isLoading: false,
};

const rootReducer = (previousState = initialState, { type, payload }) => {

    let updated = Object.assign({}, previousState);
    let tmpUser;
    let tempAlertBar;

    switch (type) {

        case NAVIGATE_HISTORY__SUCCEEDED:
            updated.history = payload.history;
            return updated;

        case ALERT__SUCCEEDED:
            tempAlertBar = Object.assign({}, payload);
            updated.alertBar = tempAlertBar;
            return updated;

        case LOADING__SUCCEEDED:
            updated.isLoading = payload.isLoading;
            return updated;

        default:
            return previousState;
    }
};

export default rootReducer;
