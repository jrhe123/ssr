import { all, call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
    VALIDATE_TOKEN_REQUESTED,
    VALIDATE_TOKEN__SUCCEEDED,
    VALIDATE_TOKEN__FAILED,

    NAVIGATE_HISTORY_REQUESTED,
    NAVIGATE_HISTORY__SUCCEEDED,
    NAVIGATE_HISTORY__FAILED,

    ALERT_REQUESTED,
    ALERT__SUCCEEDED,
    ALERT__FAILED,
} from './constants';

// Validate token
export const dxValidateTokenUrl = (params) => {

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

// Navigate history
export function* dxNavigateHistory(action) {
    try {
        yield put({
            type: NAVIGATE_HISTORY__SUCCEEDED,
            payload: {
                history: action.payload.history
            },
        });
    } catch (error) {
        yield put({
            type: NAVIGATE_HISTORY__FAILED,
            payload: error,
        });
    }
}

export function* dxNavigateHistorySaga() {
    yield takeEvery(NAVIGATE_HISTORY_REQUESTED, dxNavigateHistory);
}

// Alert
export function* dxAlert(action) {
    try {
        yield put({
            type: ALERT__SUCCEEDED,
            payload: {
                isDisplay: action.payload.isDisplay,
                isError: action.payload.isError,
                message: action.payload.message,
            },
        });
    } catch (error) {
        yield put({
            type: ALERT__FAILED,
            payload: error,
        });
    }
}

export function* dxAlertSaga() {
    yield takeEvery(ALERT_REQUESTED, dxAlert);
}