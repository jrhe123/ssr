import {
    LOGIN__SUCCEEDED,
} from './constants';

const initialState = {
    isAuthenticated: false,
    user: {},
};

const loginReducer = (previousState = initialState, { type, payload }) => {
    
    let updated = Object.assign({}, previousState);
    switch (type) {

        case LOGIN__SUCCEEDED:
            updated.isAuthenticated = true;
            updated.user = payload.User;
            return updated;

        default:
            return previousState;
    }
};

export default loginReducer;
