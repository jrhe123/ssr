import {
    EXPERIENCE_FETCH__SUCCEEDED,
} from './constants';

const initialState = {
    totalExperienceRecord: 0,
    experiences: [],
};

const dashboardReducer = (previousState = initialState, { type, payload }) => {
    
    let updated = Object.assign({}, previousState);
    switch (type) {

        case EXPERIENCE_FETCH__SUCCEEDED:
            updated.totalExperienceRecord = payload.totalRecord;
            updated.experiences = payload.experiences;
            return updated;

        default:
            return previousState;
    }
};

export default dashboardReducer;
