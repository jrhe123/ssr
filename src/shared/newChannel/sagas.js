import { all, call, put, takeEvery } from 'redux-saga/effects';
import FormData from 'form-data';
import * as apiManager from '../helpers/apiManager';

import {
    CHANNEL_TYPE_REQUESTED,
    CHANNEL_TYPE__SUCCEEDED,
    CHANNEL_TYPE__FAILED,

    CHANNEL_VALUE_REQUESTED,
    CHANNEL_VALUE__SUCCEEDED,
    CHANNEL_VALUE__FAILED,
} from './constants';

// Channel type request
export function* channelType(action) {
    try {
        yield put({
            type: CHANNEL_TYPE__SUCCEEDED,
            payload: {
                channelType: action.payload.channelType
            },
        });
    } catch (error) {
        yield put({
            type: CHANNEL_TYPE__FAILED,
            payload: error,
        });
    }
}

export function* dxChannelTypeSaga() {
    yield takeEvery(CHANNEL_TYPE_REQUESTED, channelType);
}

//Channel Val update
export function* dxChannelValUpdate(action) {
    try {
        yield put({
            type: CHANNEL_VALUE__SUCCEEDED,
            payload: {
                type: action.payload.type,
                val: action.payload.val,
            },
        });
    } catch (error) {
        yield put({
            type: CHANNEL_VALUE__FAILED,
            payload: error,
        });
    }
}

export function* dxChannelValUpdateSaga() {
    yield takeEvery(CHANNEL_VALUE_REQUESTED, dxChannelValUpdate);
}
