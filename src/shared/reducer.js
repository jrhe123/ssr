// Login
import {
    LOGIN__SUCCEEDED,
    LOGIN__FAILED,
} from './login';

// Dashboard
import {
    LOGOUT__SUCCEEDED,
    LOGOUT__FAILED,

    CHANNEL_FETCH__FAILED,
    CHANNEL_UPDATE__SUCCEEDED,
    CHANNEL_UPDATE__FAILED,
} from './dashboard';

// Global
import {
    VALIDATE_TOKEN__SUCCEEDED,
    VALIDATE_TOKEN__FAILED,

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

        case ALERT__SUCCEEDED:
            tempAlertBar = Object.assign({}, payload);
            updated.alertBar = tempAlertBar;
            return updated;

        case LOADING__SUCCEEDED:
            updated.isLoading = payload.isLoading;
            return updated;

        case CHANNEL_UPDATE__SUCCEEDED:
            tempAlertBar = {
                isDisplay: true,
                isError: false,
                message: 'Channel has been updated'
            }
            updated.alertBar = tempAlertBar;
            return updated;

        case CHANNEL_FETCH__FAILED, CHANNEL_UPDATE__FAILED:
            tempAlertBar = {
                isDisplay: true,
                isError: true,
                message: 'DX api error'
            }
            updated.alertBar = tempAlertBar;
            return updated;

        default:
            return previousState;
    }
};

export default rootReducer;
