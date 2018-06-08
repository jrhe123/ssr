import {
    VALIDATE_TOKEN_REQUESTED,
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