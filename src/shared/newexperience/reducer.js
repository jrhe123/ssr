import {
    EXPERIENCE_TYPE__SUCCEEDED,
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
        
        default:
            return previousState;
    }
};

export default newexperienceReducer;
