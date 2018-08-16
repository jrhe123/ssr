import {
    VALIDATE_TOKEN_REQUESTED,
    VALIDATE_UNLOCK_TOKEN_REQUESTED,
    NAVIGATE_HISTORY_REQUESTED,
    ALERT_REQUESTED,
    LOADING_REQUESTED,
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

export const dxValidateUnlockToken = (token, userGUID) => {
    return {
        type: VALIDATE_UNLOCK_TOKEN_REQUESTED,
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

export const dxLoading = (isLoading) => {
    return {
        type: LOADING_REQUESTED,
        payload: {
            isLoading,
        },
    }
}