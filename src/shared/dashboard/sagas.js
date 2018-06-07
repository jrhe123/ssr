import { all, call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
    LOGOUT_REQUESTED,
    LOGOUT__SUCCEEDED,
    LOGOUT__FAILED,

    VALIDATE_TOKEN_REQUESTED,
    VALIDATE_TOKEN__SUCCEEDED,
    VALIDATE_TOKEN__FAILED,
} from './constants';

// Logout
export const dxLogoutUrl = () => {
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

export function* dxLogout() {
    try {
        const response = yield call(dxLogoutUrl);
        localStorage.clear();
        yield put({
            type: LOGOUT__SUCCEEDED,
            payload: {},
        });
    } catch (error) {
        yield put({
            type: LOGOUT__FAILED,
            payload: error,
        });
    }
}

export function* dxLogoutSaga() {
    yield takeEvery(LOGOUT_REQUESTED, dxLogout);
}


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
        yield put({
            type: VALIDATE_TOKEN__SUCCEEDED,
            payload: {},
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