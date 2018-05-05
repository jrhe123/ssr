import {
    FETCH_GISTS_REQUESTED,
    ADD_GIST_REQUESTED,
    REMOVE_GIST_REQUESTED,
} from './constants';

export const fetchGists = () => {
    return {
        type: FETCH_GISTS_REQUESTED,
        payload: {},
    }
}

export const addGist = () => {
    console.log('action called');
    return {
        type:  ADD_GIST_REQUESTED,
        payload: {},
    }
}

export const removeGist = (id) => {
    console.log('action called: ', id);
    return {
        type:  REMOVE_GIST_REQUESTED,
        payload: {
            id
        },
    }
}