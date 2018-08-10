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

    CHANNEL_CREATE_REQUESTED,
    CHANNEL_CREATE__SUCCEEDED,
    CHANNEL_CREATE__FAILED,

    CHANNEL_VIEW_REQUESTED,
    CHANNEL_VIEW__SUCCEEDED,
    CHANNEL_VIEW__FAILED,

    CHANNEL_UPDATE_REQUESTED,
    CHANNEL_UPDATE__SUCCEEDED,
    CHANNEL_UPDATE__FAILED,
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

// Channel create
export const dxChannelCreateUrl = (params) => {
    const {
        ChannelType,
        ChannelColor,
        ChannelName,
        ChannelDescription,
    } = params.channel
    const formattedParams = {
        IsPrivate: ChannelType == 1 ? '1' : '0',
        ChannelColor: ChannelColor,
        ChannelName: ChannelName,
        ChannelDescription: ChannelDescription,
    };
    return (
        apiManager.dxApi(`/channel/create`, formattedParams, true)
    )
}

export function* dxChannelCreate(action) {
    try {
        const response = yield call(dxChannelCreateUrl, action.payload);
        let { Confirmation, Response, Message } = response;
        if (Confirmation != 'SUCCESS') {
            yield put({
                type: CHANNEL_CREATE__FAILED,
                payload: {
                    message: 'Experience channel create api error'
                },
            });
        } else {
            yield put({
                type: CHANNEL_CREATE__SUCCEEDED,
                payload: {
                    experience: Response,
                    message: 'Experience channel has been created'
                },
            });
        }
    } catch (error) {
        yield put({
            type: CHANNEL_CREATE__FAILED,
            payload: {
                message: 'Experience channel create api error'
            },
        });
    }
}

export function* dxChannelCreateSaga() {
    yield takeEvery(CHANNEL_CREATE_REQUESTED, dxChannelCreate);
}

// View Channel
export const dxViewChannelUrl = (params) => {
    return (
        apiManager.dxApi(`/channel/view`, { ExperienceChannelGUID: params.experienceChannelGUID }, true)
    )
}

export function* dxViewChannel(action) {
    try {
        const response = yield call(dxViewChannelUrl, action.payload);
        let { Confirmation, Response, Message } = response;
        if (Confirmation != 'SUCCESS') {
            yield put({
                type: CHANNEL_VIEW__FAILED,
                payload: {
                    message: 'Channel view api error'
                },
            });
        } else {
            yield put({
                type: CHANNEL_VIEW__SUCCEEDED,
                payload: {
                    experienceChannel: Response
                },
            });
        }
    } catch (error) {
        yield put({
            type: CHANNEL_VIEW__FAILED,
            payload: {
                message: 'Experience view api error'
            },
        });
    }
}

export function* dxViewChannelSaga() {
    yield takeEvery(CHANNEL_VIEW_REQUESTED, dxViewChannel);
}

// Channel update
export const dxChannelUpdateUrl = (params) => {
    const {
        experienceChannel
    } = params;
    const {
        ExperienceChannelGUID,
        ChannelName,
        ChannelDescription,
        ChannelColor,
        ChannelType
    } = experienceChannel;
    const formattedParams = {
        ExperienceChannelGUID,
        ChannelName,
        ChannelDescription,
        ChannelColor,
        IsPrivate: ChannelType == 0 ? '0' : '1',
    };
    return (
        apiManager.dxApi(`/channel/update`, formattedParams, true)
    )
}

export function* dxChannelUpdate(action) {
    try {
        const response = yield call(dxChannelUpdateUrl, action.payload);
        let { Confirmation, Response, Message } = response;
        if (Confirmation != 'SUCCESS') {
            yield put({
                type: CHANNEL_UPDATE__FAILED,
                payload: {
                    message: 'Experience channel update api error'
                },
            });
        } else {
            yield put({
                type: CHANNEL_UPDATE__SUCCEEDED,
                payload: {
                    experience: Response,
                    message: 'Experience channel has been updated'
                },
            });
        }
    } catch (error) {
        yield put({
            type: CHANNEL_UPDATE__FAILED,
            payload: {
                message: 'Experience channel update api error'
            },
        });
    }
}

export function* dxChannelUpdateSaga() {
    yield takeEvery(CHANNEL_UPDATE_REQUESTED, dxChannelUpdate);
}