import { all, call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import config from './config';

import {

    NAVIGATE_HISTORY_REQUESTED,
    NAVIGATE_HISTORY__SUCCEEDED,
    NAVIGATE_HISTORY__FAILED,

    ALERT_REQUESTED,
    ALERT__SUCCEEDED,
    ALERT__FAILED,

    LOADING_REQUESTED,
    LOADING__SUCCEEDED,
    LOADING__FAILED,
} from './constants';

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

// Loading
export function* dxLoading(action) {
    try {
        yield put({
            type: LOADING__SUCCEEDED,
            payload: {
                isLoading: action.payload.isLoading,
            },
        });
    } catch (error) {
        yield put({
            type: LOADING__FAILED,
            payload: error,
        });
    }
}

export function* dxLoadingSaga() {
    yield takeEvery(LOADING_REQUESTED, dxLoading);
}