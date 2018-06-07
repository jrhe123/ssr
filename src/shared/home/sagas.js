import { all, call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
    FETCH_GISTS_REQUESTED,
    FETCH_GISTS__SUCCEEDED,
    FETCH_GISTS__FAILED,

    ADD_GIST_REQUESTED,
    ADD_GIST__SUCCEEDED,
    ADD_GIST__FAILED,

    REMOVE_GIST_REQUESTED,
    REMOVE_GIST__SUCCEEDED,
    REMOVE_GIST__FAILED,
} from './constants';

// Libraries
import uuidv1 from 'uuid/v1';
import loremIpsum from 'lorem-ipsum';


// FETCH GIST
export const fetchUrl = () => {
    return (
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error();
            }
            return response.json();
        })
    )
}

export function* fetchGists() {
    try {
        const gists = yield call(fetchUrl);

        yield put({
            type: FETCH_GISTS__SUCCEEDED,
            payload: {
                gists: gists.map(gist => ({
                    id: gist.id,
                    title: gist.description || 'default string',
                })),
            },
        });
    } catch (error) {
        yield put({
            type: FETCH_GISTS__FAILED,
            payload: error,
        });
    }
}

export function* fetchGistsSaga() {
    yield takeEvery(FETCH_GISTS_REQUESTED, fetchGists);
}


// ADD GIST
export const addUrl = () => {
    console.log('api called');
    return (    
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error();
            }
            return {
                "title": loremIpsum(),
                "id": uuidv1(),
            };
        })
    )
}

export function* addGist() {
    console.log('add request called');
    try {
        const gist = yield call(addUrl);

        yield put({
            // type: ADD_GIST__SUCCEEDED,
            // payload: {
            //     gist: gist,
            // },

            type: ADD_GIST__FAILED,
            payload: {
                message: 'error msg goes here'
            }
        });
    } catch (error) {
        yield put({
            type: ADD_GIST__FAILED,
            payload: error,
        });
    }
}

export function* addGistSaga() {
    yield takeEvery(ADD_GIST_REQUESTED, addGist);
}


// REMOVE GIST
export const removeUrl = (params) => {
    console.log('api called');
    return (    
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error();
            }
            return {
                "id": params.id
            };
        })
    )
}

export function* removeGist(action) {
    console.log('remvoe request called');
    try {
        const id = yield call(removeUrl, action.payload);

        yield put({
            type: REMOVE_GIST__SUCCEEDED,
            payload: {
                id
            },
        });
    } catch (error) {
        yield put({
            type: REMOVE_GIST__FAILED,
            payload: error,
        });
    }
}

export function* removeGistSaga() {
    yield takeEvery(REMOVE_GIST_REQUESTED, removeGist);
}
