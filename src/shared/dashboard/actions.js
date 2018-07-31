import {
    LOGOUT_REQUESTED,

    // CHANNEL
    CHANNEL_FETCH_REQUESTED,

    // EXPERIENCE
    HTML_FETCH_REQUESTED,
    EXPERIENCE_FETCH_REQUESTED,
    EXPERIENCE_DELETE_REQUESTED,

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

export const dxHtmlFetch = (experienceGUID, pageGUID, sectionGUID, guid) => {
    return {
        type: HTML_FETCH_REQUESTED,
        payload: {
            experienceGUID, 
            pageGUID, 
            sectionGUID, 
            guid,
        },
    }
}

export const dxFetchExperience = () => {
    return {
        type: EXPERIENCE_FETCH_REQUESTED,
        payload: {},
    }
}

export const dxDeleteExperience = (experienceGUID) => {
    return {
        type: EXPERIENCE_DELETE_REQUESTED,
        payload: {
            experienceGUID
        },
    }
}