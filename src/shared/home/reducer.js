import {
    
} from './constants';

const initialState = {
    
};

const homeReducer = (previousState = initialState, { type, payload }) => {
    
    let updated = Object.assign({}, previousState);
    switch (type) {

        
        default:
            return previousState;
    }
};

export default homeReducer;
