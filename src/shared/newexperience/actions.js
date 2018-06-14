import {
    EXPERIENCE_TYPE_REQUESTED
} from './constants';

export const dxExperienceType = (experienceType) => {
    return {
        type: EXPERIENCE_TYPE_REQUESTED,
        payload: {
            experienceType
        },
    }
}
