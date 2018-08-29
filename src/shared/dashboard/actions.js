import {
    DASHBOARD_NAVI_REQUESTED,
    LOGOUT_REQUESTED,

    // CHANNEL
    CHANNEL_UPDATE_SEARCH_REQUESTED,
    CHANNEL_FETCH_REQUESTED,
    CHANNEL_UPDATE_STATUS_REQUESTED,

    // EXPERIENCE
    HTML_FETCH_REQUESTED,
    EXPERIENCE_UPDATE_SEARCH_REQUESTED,
    EXPERIENCE_UPDATE_FILTER_REQUESTED,
    EXPERIENCE_CLEAR_FILTER_REQUESTED,
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

export const dxUpdateChannelSearch = (val, channelTypeFilter, channelStatusFilter) => {
    return {
        type: CHANNEL_UPDATE_SEARCH_REQUESTED,
        payload: {
            val,
            channelTypeFilter,
            channelStatusFilter,
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

export const dxUpdateExperienceSearch = (val, currentCardOnlyExperiencesFilter, currentCardAndPagesExperiencesFilter) => {
    return {
        type: EXPERIENCE_UPDATE_SEARCH_REQUESTED,
        payload: {
            val,
            currentCardOnlyExperiencesFilter,
            currentCardAndPagesExperiencesFilter,
        },
    }
}

export const dxUpdateExperienceFilter = (experienceType, option, experienceSearchVal) => {
    return {
        type: EXPERIENCE_UPDATE_FILTER_REQUESTED,
        payload: {
            experienceType,
            option,
            experienceSearchVal,
        },
    }
}

export const dxClearExperienceFilter = () => {
    return {
        type: EXPERIENCE_CLEAR_FILTER_REQUESTED,
        payload: {},
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

export const dxFetchMoreExperience = (experienceType, currentPageIndex, experienceSearch, filterType) => {
    return {
        type: EXPERIENCE_FETCH_MORE_REQUESTED,
        payload: {
            experienceType,
            currentPageIndex,
            experienceSearch,
            filterType,
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