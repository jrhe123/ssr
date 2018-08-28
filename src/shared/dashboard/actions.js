import {
    DASHBOARD_NAVI_REQUESTED,
    LOGOUT_REQUESTED,

    // CHANNEL
    CHANNEL_FETCH_REQUESTED,
    CHANNEL_UPDATE_STATUS_REQUESTED,

    // EXPERIENCE
    HTML_FETCH_REQUESTED,
    EXPERIENCE_UPDATE_SEARCH_REQUESTED,
    EXPERIENCE_FETCH_REQUESTED,
    EXPERIENCE_FETCH_MORE_REQUESTED,
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

export const dxHtmlFetch = (experienceGUID, pageGUID, sectionGUID, guid, experienceType) => {
    return {
        type: HTML_FETCH_REQUESTED,
        payload: {
            experienceGUID,
            pageGUID,
            sectionGUID,
            guid,
            experienceType,
        },
    }
}

export const dxUpdateExperienceSearch = (val) => {
    return {
        type: EXPERIENCE_UPDATE_SEARCH_REQUESTED,
        payload: {
            val
        },
    }
}

export const dxFetchExperience = (experienceType) => {
    return {
        type: EXPERIENCE_FETCH_REQUESTED,
        payload: {
            experienceType
        },
    }
}

export const dxFetchMoreExperience = (experienceType, currentPageIndex) => {
    return {
        type: EXPERIENCE_FETCH_MORE_REQUESTED,
        payload: {
            experienceType,
            currentPageIndex,
        },
    }
}

export const dxDeleteExperience = (experienceGUID, experienceType) => {
    return {
        type: EXPERIENCE_DELETE_REQUESTED,
        payload: {
            experienceGUID,
            experienceType,
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