import {
    FETCH_GISTS__SUCCEEDED,
    ADD_GIST__SUCCEEDED,
    REMOVE_GIST__SUCCEEDED,
} from './constants';

const initialState = {
    gists: [],
};

const homeReducers = (previousState = initialState, { type, payload }) => {
    
    let updated = Object.assign({}, previousState);
    switch (type) {

        case FETCH_GISTS__SUCCEEDED:
            updated.gists = payload.gists;
            return updated;

        case ADD_GIST__SUCCEEDED:
            console.log('reducer called');
            let addGists = Object.assign([], updated.gists);
            addGists.unshift(payload.gist);
            updated.gists = addGists;
            return updated;
        
        case REMOVE_GIST__SUCCEEDED:
            console.log('reducer called');
            let removeGists = Object.assign([], updated.gists);
            for(let i = 0; i < removeGists.length; i++){
                if(removeGists[i].id === payload.id.id){
                    removeGists.splice(i, 1);
                }
            }
            updated.gists = removeGists;
            return updated;

        default:
            return previousState;
    }
};

export default homeReducers;
