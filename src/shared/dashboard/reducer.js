import {
    LOGOUT__SUCCEEDED,
} from './constants';

const initialState = {
    gists: [],
};

const dashboardReducer = (previousState = initialState, { type, payload }) => {
    
    let updated = Object.assign({}, previousState);
    switch (type) {

        case LOGOUT__SUCCEEDED:
            updated.gists = payload.gists;
            return updated;

        default:
            return previousState;
    }
};

export default dashboardReducer;
