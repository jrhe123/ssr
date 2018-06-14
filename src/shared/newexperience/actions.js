import {
    EXPERIENCE_TYPE_REQUESTED,
    EXPERIENCE_TYPE_UPDATE_REQUESTED,
    EXPERIENCE_INDEX_UPDATE_REQUESTED,
    EXPERIENCE_TITLE_UPDATE_REQUESTED,
} from './constants';

export const dxExperienceType = (experienceType) => {
    return {
        type: EXPERIENCE_TYPE_REQUESTED,
        payload: {
            experienceType
        },
    }
}

export const dxExperienceTypeUpdate = (experienceType) => {
    return {
        type: EXPERIENCE_TYPE_UPDATE_REQUESTED,
        payload: {
            experienceType
        },
    }
}

export const dxExperienceIndexUpdate = (experienceIndex) => {
    return {
        type: EXPERIENCE_INDEX_UPDATE_REQUESTED,
        payload: {
            experienceIndex
        },
    }
}

export const dxExperienceTitleUpdate = (type, title) => {
    return {
        type: EXPERIENCE_TITLE_UPDATE_REQUESTED,
        payload: {
            type,
            title,
        },
    }
}