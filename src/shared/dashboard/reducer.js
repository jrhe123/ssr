import {

} from './constants';

const initialState = {
    experiences: [],
};

const dashboardReducer = (previousState = initialState, { type, payload }) => {
    
    let updated = Object.assign({}, previousState);
    switch (type) {

        default:
            return previousState;
    }
};

export default dashboardReducer;
