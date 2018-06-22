import {
    VALIDATE_TOKEN_REQUESTED,
    NAVIGATE_HISTORY_REQUESTED,
    ALERT_REQUESTED,
} from './constants';

export const dxValidateToken = (token, userGUID) => {
    return {
        type: VALIDATE_TOKEN_REQUESTED,
        payload: {
            token,
            userGUID,
        },
    }
}

export const dxNavigateHistory = (history) => {
    return {
        type: NAVIGATE_HISTORY_REQUESTED,
        payload: {
            history
        },
    }
}

export const dxAlert = (isDisplay, isError, message) => {
    return {
        type: ALERT_REQUESTED,
        payload: {
            isDisplay,
            isError,
            message,
        },
    }
}