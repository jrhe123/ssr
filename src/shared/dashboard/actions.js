import {
    DASHBOARD_NAVI_REQUESTED,
    LOGOUT_REQUESTED,
    PASSWORD_INPUT_REQUESTED,
    UNLOCK_SITE_REQUESTED,

    // CHANNEL
    CHANNEL_FETCH_REQUESTED,
    CHANNEL_UPDATE_STATUS_REQUESTED,

    // EXPERIENCE
    HTML_FETCH_REQUESTED,
    EXPERIENCE_FETCH_REQUESTED,
    EXPERIENCE_DELETE_REQUESTED,

    // STREAM
    STREAM_CHANNEL_FETCH_REQUESTED,
    STREAM_CHANNEL_SELECT_REQUESTED,
    STREAM_CREATE_REQUESTED,
    STREAM_REMOVE_REQUESTED,
} from './constants';

export const dxDashboardNavi = (index) => {
    return {
        type: DASHBOARD_NAVI_REQUESTED,
        payload: {
            index
        },
    }
}

export const dxLogout = () => {
    return {
        type: LOGOUT_REQUESTED,
        payload: {},
    }
}

export const dxPasswordInput = (value, type) => {
    return {
        type: PASSWORD_INPUT_REQUESTED,
        payload: {
            type,
            value,
        },
    }
}

export const dxSiteUnlock = (password) => {
    return {
        type: UNLOCK_SITE_REQUESTED,
        payload: {
            password
        },
    }
}

export const dxFetchChannel = () => {
    return {
        type: CHANNEL_FETCH_REQUESTED,
        payload: {},
    }
}

export const dxUpdateChannel = (channel) => {
    return {
        type: CHANNEL_UPDATE_STATUS_REQUESTED,
        payload: {
            channel,
        },
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

export const dxFetchStreamChannel = () => {
    return {
        type: STREAM_CHANNEL_FETCH_REQUESTED,
        payload: {},
    }
}

export const dxSelectStreamChannel = (channel) => {
    return {
        type: STREAM_CHANNEL_SELECT_REQUESTED,
        payload: {
            channel
        },
    }
}

export const dxCreateStream = (channel, experience) => {
    return {
        type: STREAM_CREATE_REQUESTED,
        payload: {
            channel,
            experience,
        },
    }
}

export const dxRemoveStream = (experienceStreamGUID) => {
    return {
        type: STREAM_REMOVE_REQUESTED,
        payload: {
            experienceStreamGUID
        },
    }
}