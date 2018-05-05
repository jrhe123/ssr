import {
    FETCH_GISTS__SUCCEEDED,
    ADD_GIST__SUCCEEDED,
    REMOVE_GIST__SUCCEEDED,
} from './constants';

const initialState = [];

const homeReducers = (previousState = initialState, { type, payload }) => {
    
    let arr = Object.assign([], previousState);
    switch (type) {

        case FETCH_GISTS__SUCCEEDED:
            return payload.gists;

        case ADD_GIST__SUCCEEDED:
            console.log('reducer called');
            arr.unshift(payload.gist);
            return arr;
        
        case REMOVE_GIST__SUCCEEDED:
            console.log('reducer called');
            for(let i = 0; i < arr.length; i++){
                if(arr[i].id === payload.id.id){
                    arr.splice(i, 1);
                }
            }
            return arr;

        default:
            return previousState;
    }
};

export default homeReducers;
