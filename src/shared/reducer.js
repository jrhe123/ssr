// Login
import {
    LOGIN__SUCCEEDED,
    LOGIN__FAILED,
} from './login';

// Dashboard
import {
    LOGOUT__SUCCEEDED,
    LOGOUT__FAILED,

    EXPERIENCE_FETCH__FAILED,
    EXPERIENCE_DELETE__SUCCEEDED,
    EXPERIENCE_DELETE__FAILED,

    CHANNEL_FETCH__FAILED,
    CHANNEL_UPDATE_STATUS__SUCCEEDED,
    CHANNEL_UPDATE_STATUS__FAILED,

    STREAM_CHANNEL_FETCH__FAILED,
    STREAM_CREATE__SUCCEEDED,
    STREAM_CREATE__FAILED,
    STREAM_REMOVE__SUCCEEDED,
    STREAM_REMOVE__FAILED,
} from './dashboard';

// New experience
import {
    EXPERIENCE_UPLOAD_GOOGLE_FILE_REQUESTED,
    EXPERIENCE_UPLOAD_GOOGLE_FILE__SUCCEEDED,
    EXPERIENCE_UPLOAD_GOOGLE_FILE__FAILED,

    EXPERIENCE_UPLOAD_FILE_REQUESTED,
    EXPERIENCE_UPLOAD_FILE__SUCCEEDED,
    EXPERIENCE_UPLOAD_FILE__FAILED,

    EXPERIENCE_CREATE_REQUESTED,
    EXPERIENCE_CREATE__SUCCEEDED,
    EXPERIENCE_CREATE__FAILED,

    EXPERIENCE_UPDATE_FILE_REQUESTED,
    EXPERIENCE_UPDATE_FILE__SUCCEEDED,
    EXPERIENCE_UPDATE_FILE__FAILED,

    EXPERIENCE_UPDATE_REQUESTED,
    EXPERIENCE_UPDATE__SUCCEEDED,
    EXPERIENCE_UPDATE__FAILED,

    EXPERIENCE_VIEW_REQUESTED,
    EXPERIENCE_VIEW__SUCCEEDED,
    EXPERIENCE_VIEW__FAILED,

    EXPERIENCE_PAGE_UPDATE_ELEM__FAILED,

} from './newexperience';

// New channel
import {

    CHANNEL_CREATE_REQUESTED,
    CHANNEL_CREATE__SUCCEEDED,
    CHANNEL_CREATE__FAILED,

    CHANNEL_UPDATE_REQUESTED,
    CHANNEL_UPDATE__SUCCEEDED,
    CHANNEL_UPDATE__FAILED,
} from './newchannel';

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

        case EXPERIENCE_UPLOAD_GOOGLE_FILE_REQUESTED:
        case EXPERIENCE_UPLOAD_FILE_REQUESTED:
        case EXPERIENCE_UPDATE_FILE_REQUESTED:
            updated.isLoading = true;
            return updated;

        case EXPERIENCE_UPLOAD_GOOGLE_FILE__SUCCEEDED:
            updated.isLoading = false;
            return updated;

        case EXPERIENCE_UPLOAD_GOOGLE_FILE__FAILED:
            updated.isLoading = false;
            tempAlertBar = {
                isDisplay: true,
                isError: false,
                message: payload.message
            }
            updated.alertBar = tempAlertBar;
            return updated;

        case EXPERIENCE_CREATE__SUCCEEDED:
        case EXPERIENCE_UPDATE__SUCCEEDED:
            tempAlertBar = {
                isDisplay: true,
                isError: false,
                message: payload.message
            }
            updated.alertBar = tempAlertBar;
            updated.isLoading = false;
            return updated;

        case EXPERIENCE_DELETE__SUCCEEDED:
        case CHANNEL_CREATE__SUCCEEDED:
        case CHANNEL_UPDATE_STATUS__SUCCEEDED:
        case CHANNEL_UPDATE__SUCCEEDED:
        case STREAM_CREATE__SUCCEEDED:
        case STREAM_REMOVE__SUCCEEDED:
            tempAlertBar = {
                isDisplay: true,
                isError: false,
                message: payload.message
            }
            updated.alertBar = tempAlertBar;
            return updated;

        case EXPERIENCE_FETCH__FAILED:
        case EXPERIENCE_DELETE__FAILED:
        case EXPERIENCE_CREATE__FAILED:
        case EXPERIENCE_UPDATE__FAILED:
        case EXPERIENCE_VIEW__FAILED:
        case EXPERIENCE_PAGE_UPDATE_ELEM__FAILED:
        case CHANNEL_FETCH__FAILED:
        case CHANNEL_CREATE__FAILED:
        case CHANNEL_UPDATE_STATUS__FAILED:
        case CHANNEL_UPDATE__FAILED:
        case STREAM_CHANNEL_FETCH__FAILED:
        case STREAM_CREATE__FAILED:
        case STREAM_REMOVE__FAILED:
            tempAlertBar = {
                isDisplay: true,
                isError: true,
                message: payload.message
            }
            updated.alertBar = tempAlertBar;
            return updated;

        default:
            return previousState;
    }
};

export default rootReducer;
