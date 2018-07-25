import {
    LOGOUT_REQUESTED,
    CHANNEL_FETCH_REQUESTED,
    EXPERIENCE_FETCH_REQUESTED,
} from './constants';

export const dxLogout = () => {
    return {
        type: LOGOUT_REQUESTED,
        payload: {},
    }
}

export const dxChannelFetch = (channels) => {
    return {
        type: CHANNEL_FETCH_REQUESTED,
        payload: {channels},
    }
}

export const dxFetchExperience = () => {
    return {
        type: EXPERIENCE_FETCH_REQUESTED,
        payload: {},
    }
}