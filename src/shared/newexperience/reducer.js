import {
    EXPERIENCE_TYPE__SUCCEEDED,
    EXPERIENCE_TYPE_UPDATE__SUCCEEDED,
} from './constants';

const initialState = {
    experience: {
        type: 0
    }
};

const newexperienceReducer = (previousState = initialState, { type, payload }) => {
    
    let updated = Object.assign({}, previousState);
    switch (type) {

        case EXPERIENCE_TYPE__SUCCEEDED:
            updated.experience.type = payload.experienceType;
            return updated;

        case EXPERIENCE_TYPE_UPDATE__SUCCEEDED:
            updated.experience.type = payload.experienceType;
            return updated;

        default:
            return previousState;
    }
};

export default newexperienceReducer;
