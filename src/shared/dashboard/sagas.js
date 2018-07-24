import { all, call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import config from '../config';

import {
    LOGOUT_REQUESTED,
    LOGOUT__SUCCEEDED,
    LOGOUT__FAILED,

    CHANNEL_FETCH_REQUESTED,
    CHANNEL_FETCH__SUCCEEDED,
    CHANNEL_FETCH__FAILED
} from './constants';

// Logout
export const dxLogoutUrl = () => {
    return (
        fetch(`${config.apiHost}/root`, {
            method: 'post',
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


// Channel fetch
export function* dxChannelFetch(action) {
    try {
        yield put({
            type: CHANNEL_FETCH__SUCCEEDED,
            payload: {
                channels: action.payload.channels
            },
        });
    } catch (error) {
        yield put({
            type: CHANNEL_FETCH__FAILED,
            payload: error,
        });
    }
}

export function* dxChannelFetchSaga() {
    yield takeEvery(CHANNEL_FETCH_REQUESTED, dxChannelFetch);
}