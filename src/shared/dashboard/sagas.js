import { all, call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

// config
import config from '../config';

// helpers
import * as apiManager from '../helpers/apiManager';

import {
    LOGOUT_REQUESTED,
    LOGOUT__SUCCEEDED,
    LOGOUT__FAILED,

    CHANNEL_FETCH_REQUESTED,
    CHANNEL_FETCH__SUCCEEDED,
    CHANNEL_FETCH__FAILED,
    
    EXPERIENCE_FETCH_REQUESTED,
    EXPERIENCE_FETCH__SUCCEEDED,
    EXPERIENCE_FETCH__FAILED,

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


// Fetch Channel
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
        })
    }
}

export function* dxChannelFetchSaga() {
    yield takeEvery(CHANNEL_FETCH_REQUESTED, dxChannelFetch);
}

// Fetch experience
export const dxFetchExperienceUrl = () => {
    return (
        apiManager.dxApi(`/experience/list`, {
            Limit: "23",
            Offset: "0",
            Extra: {},
        }, true)
    )
}

export function* dxFetchExperience() {
    try {
        const response = yield call(dxFetchExperienceUrl);
        let { Confirmation, Response, Message } = response;
        if (Confirmation !== 'SUCCESS') {
            yield put({
                type: EXPERIENCE_FETCH__FAILED,
                payload: Message,
            });
        } else {
            yield put({
                type: EXPERIENCE_FETCH__SUCCEEDED,
                payload: {
                    totalRecord: Response.TotalRecord,
                    experiences: Response.Experiences,
                },
            });
        }
    } catch (error) {
        yield put({
            type: EXPERIENCE_FETCH__FAILED,
            payload: error,
        });
    }
}

export function* dxFetchExperienceSaga() {
    yield takeEvery(EXPERIENCE_FETCH_REQUESTED, dxFetchExperience);
}