import { 
    ADD_GIST__FAILED 
} from './home';

const initialState = {
    alertBar: {
        isError: false,
        message: ''
    }
};

const rootReducer = (previousState = initialState, { type, payload }) => {
    
    let updated = Object.assign({}, previousState);
    switch (type) {

        case ADD_GIST__FAILED:
            let updatedAlertBar = Object.assign({}, updated.alertBar);
            updatedAlertBar.isError = true;
            updatedAlertBar.message = payload.message;
            updated.alertBar = updatedAlertBar;
            return updated;

        default:
            return previousState;
    }
};

export default rootReducer;
