import {
    LOGIN_REQUESTED,
} from './constants';

export const dxLogin = (userName, password) => {
    return {
        type: LOGIN_REQUESTED,
        payload: {
            userName,
            password
        },
    }
}