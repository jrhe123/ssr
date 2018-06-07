import {
    FETCH_GISTS__SUCCEEDED,
} from './constants';

const initialState = {
    gists: [],
};

const dashboardReducer = (previousState = initialState, { type, payload }) => {
    
    let updated = Object.assign({}, previousState);
    switch (type) {

        case FETCH_GISTS__SUCCEEDED:
            updated.gists = payload.gists;
            return updated;

        default:
            return previousState;
    }
};

export default dashboardReducer;
