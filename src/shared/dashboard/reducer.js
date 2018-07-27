import {
    HTML_FETCH__SUCCEEDED,
    CHANNEL_FETCH__SUCCEEDED,
    EXPERIENCE_FETCH__SUCCEEDED,
} from './constants';

const initialState = {
    TotalExperienceRecord: 0,
    Experiences: [],

    Channels:[]
};

const dashboardReducer = (previousState = initialState, { type, payload }) => {
    
    let updated = Object.assign({}, previousState);
    switch (type) {

        case HTML_FETCH__SUCCEEDED:
            console.log('reducer received');
            return updated;

        case CHANNEL_FETCH__SUCCEEDED:
            updated.Channels = payload.channels;
            return updated;

        case EXPERIENCE_FETCH__SUCCEEDED:
            updated.TotalExperienceRecord = payload.totalRecord;
            updated.Experiences = payload.experiences;
            return updated;

        default:
            return previousState;
    }
};

export default dashboardReducer;
