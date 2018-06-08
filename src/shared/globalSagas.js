import { all, call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
    VALIDATE_TOKEN_REQUESTED,
    VALIDATE_TOKEN__SUCCEEDED,
    VALIDATE_TOKEN__FAILED,
} from './constants';

// Validate token
export const dxValidateTokenUrl = (params) => {

    // console.log('login params: ', params);
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
        .catch((error) => {
            return error;
        })
    )
}

export function* dxValidateToken(action) {
    try {
        const response = yield call(dxValidateTokenUrl, action.payload);
        let token = localStorage.getItem('token', token);
        yield put({
            type: VALIDATE_TOKEN__SUCCEEDED,
            payload: {
                user: {
                    UserGUID: "5f92de5b-e627-43e5-a42f-75f9e4715380",
                    UserTypeID: 1,
                    AuthorizationToken: token
                }
            },
        });
    } catch (error) {
        localStorage.clear();
        yield put({
            type: VALIDATE_TOKEN__FAILED,
            payload: error,
        });
    }
}

export function* dxValidateTokenSaga() {
    yield takeEvery(VALIDATE_TOKEN_REQUESTED, dxValidateToken);
}