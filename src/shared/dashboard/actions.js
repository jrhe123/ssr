import {
    LOGOUT_REQUESTED,
    VALIDATE_TOKEN_REQUESTED,
} from './constants';

export const dxLogout = () => {
    return {
        type: LOGOUT_REQUESTED,
        payload: {},
    }
}

export const dxValidateToken = (token, userGUID) => {
    return {
        type: VALIDATE_TOKEN_REQUESTED,
        payload: {
            token,
            userGUID,
        },
    }
}