import {
    EXPERIENCE_TYPE_REQUESTED,
} from './constants';

export const experienceType = (experienceType) => {
    return {
        type: EXPERIENCE_TYPE_REQUESTED,
        payload: {
            experienceType
        },
    }
}
