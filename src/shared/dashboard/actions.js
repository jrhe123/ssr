import {
    LOGOUT_REQUESTED,
    EXPERIENCE_FETCH_REQUESTED,
} from './constants';

export const dxLogout = () => {
    return {
        type: LOGOUT_REQUESTED,
        payload: {},
    }
}

export const dxFetchExperience = () => {
    return {
        type: EXPERIENCE_FETCH_REQUESTED,
        payload: {},
    }
}