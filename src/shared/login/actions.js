import {
    LOGIN_REQUESTED,
} from './constants';

export const dxLogin = () => {
    return {
        type: LOGIN_REQUESTED,
        payload: {},
    }
}