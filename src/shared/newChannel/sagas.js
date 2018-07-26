import { all, call, put, takeEvery } from 'redux-saga/effects';
import FormData from 'form-data';
import * as apiManager from '../helpers/apiManager';

import {
    CHANNEL_TYPE_REQUESTED,
    CHANNEL_TYPE__SUCCEEDED,
    CHANNEL_TYPE__FAILED,

    CHANNEL_TYPE_UPDATE_REQUESTED,
    CHANNEL_TYPE_UPDATE__SUCCEEDED,
    CHANNEL_TYPE_UPDATE__FAILED,
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

//Channel Type update
export function* channelTypeUpdate(action) {
    try {
        yield put({
            type: CHANNEL_TYPE_UPDATE__SUCCEEDED,
            payload: {
                channelType: action.payload.channelType
            },
        });
    } catch (error) {
        yield put({
            type: CHANNEL_TYPE_UPDATE__FAILED,
            payload: error,
        });
    }
}

export function* dxChannelTypeUpdateSaga() {
    yield takeEvery(CHANNEL_TYPE_UPDATE_REQUESTED, channelTypeUpdate);
}
