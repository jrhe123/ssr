import {
    NAVIGATE_HISTORY_REQUESTED,
    ALERT_REQUESTED,
    LOADING_REQUESTED,
} from './constants';


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