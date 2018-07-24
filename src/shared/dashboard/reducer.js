import {
    EXPERIENCE_FETCH__SUCCEEDED,
} from './constants';

const initialState = {
    totalRecord: 0,
    experiences: [],
};

const dashboardReducer = (previousState = initialState, { type, payload }) => {
    
    let updated = Object.assign({}, previousState);
    switch (type) {

        case EXPERIENCE_FETCH__SUCCEEDED:
            updated.totalRecord = payload.totalRecord;
            updated.experiences = payload.experiences;
            return updated;

        default:
            return previousState;
    }
};

export default dashboardReducer;
