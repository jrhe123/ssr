import {
    CHANNEL_FETCH__SUCCEEDED,
    EXPERIENCE_FETCH__SUCCEEDED,
} from './constants';

// helpers
import { uuid } from '../helpers/tools';

let channelTemplate = {
    channelGUID: null,
    channelName: null,      // channel name
    channelColor: null,     // channel color
    isPrivate: null,        // is it a private channel    
    status:null             // is the channel live or it's in draft
};

const initialState = {
    totalExperienceRecord: 0,
    experiences: [],

    channels:[]
};

const dashboardReducer = (previousState = initialState, { type, payload }) => {
    
    let updated = Object.assign({}, previousState);
    switch (type) {

        case CHANNEL_FETCH__SUCCEEDED:
            updated.channels = payload.channels;
            return updated;

        case EXPERIENCE_FETCH__SUCCEEDED:
            updated.totalExperienceRecord = payload.totalRecord;
            updated.experiences = payload.experiences;
            return updated;

        default:
            return previousState;
    }
};

export default dashboardReducer;
