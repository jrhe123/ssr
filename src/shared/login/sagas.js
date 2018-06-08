import { all, call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
    LOGIN_REQUESTED,
    LOGIN__SUCCEEDED,
    LOGIN__FAILED,
} from './constants';

// LOGIN
export const dxLoginUrl = (params) => {

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

export function* dxLogin(action) {
    try {
        const response = yield call(dxLoginUrl, action.payload);
        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';        
        localStorage.setItem('token', token);
        yield put({
            type: LOGIN__SUCCEEDED,
            payload: {
                user: {
                    UserGUID: "5f92de5b-e627-43e5-a42f-75f9e4715380",
                    UserTypeID: 1,
                    AuthorizationToken: token
                }
            },
        });
    } catch (error) {
        yield put({
            type: LOGIN__FAILED,
            payload: error,
        });
    }
}

export function* dxLoginSaga() {
    yield takeEvery(LOGIN_REQUESTED, dxLogin);
}