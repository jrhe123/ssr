import {

} from './constants';

const initialState = {

};

const dashboardReducer = (previousState = initialState, { type, payload }) => {
    
    let updated = Object.assign({}, previousState);
    switch (type) {

        default:
            return previousState;
    }
};

export default dashboardReducer;
