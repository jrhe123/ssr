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

    CHANNEL_UPDATE_REQUESTED,
    CHANNEL_UPDATE__SUCCEEDED,
    CHANNEL_UPDATE__FAILED,

    HTML_FETCH_REQUESTED,
    HTML_FETCH__SUCCEEDED,
    HTML_FETCH__FAILED,

    EXPERIENCE_FETCH_REQUESTED,
    EXPERIENCE_FETCH__SUCCEEDED,
    EXPERIENCE_FETCH__FAILED,

    EXPERIENCE_DELETE_REQUESTED,
    EXPERIENCE_DELETE__SUCCEEDED,
    EXPERIENCE_DELETE__FAILED,

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
export const dxFetchChannelUrl = (params) => {
    return (
        apiManager.dxApi(`/channel/list`, {
            Limit: "5",
            Offset: "0",
            Extra: {
                ChannelStatus: ""
            },
        }, true)
    )
}

export function* dxFetchChannel(action) {
    try {
        const response = yield call(dxFetchChannelUrl);
        let { Confirmation, Response, Message } = response;
        if (Confirmation !== 'SUCCESS') {
            yield put({
                type: CHANNEL_FETCH__FAILED,
                payload: {
                    message: 'Experience channel fetch api error'
                },
            });
        } else {
            yield put({
                type: CHANNEL_FETCH__SUCCEEDED,
                payload: {
                    totalRecord: Response.TotalRecord,
                    expereienceChannels: Response.ExperienceChannels,
                },
            });
        }
    } catch (error) {
        yield put({
            type: CHANNEL_FETCH__FAILED,
            payload: {
                message: 'Experience channel fetch api error'
            },
        });
    }
}

export function* dxFetchChannelSaga() {
    yield takeEvery(CHANNEL_FETCH_REQUESTED, dxFetchChannel);
}

// Update Channel
export const dxUpdateChannelUrl = (params) => {
    return (
        apiManager.dxApi(`/channel/update`, params.channel, true)
    )
}

export function* dxUpdateChannel(action) {
    try {
        const response = yield call(dxUpdateChannelUrl, action.payload);
        let { Confirmation, Response, Message } = response;
        if (Confirmation !== 'SUCCESS') {
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
                    experienceChannel: Response.ExperienceChannel,
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

export function* dxUpdateChannelSaga() {
    yield takeEvery(CHANNEL_UPDATE_REQUESTED, dxUpdateChannel);
}

// Html loading
export const dxHtmlFetchUrl = (params) => {
    let guid = params.guid;
    return (
        apiManager.dxHtmlApi(`${config.fileHost}/${guid}.html`)
    )
}

export function* dxHtmlFetch(action) {
    try {
        const response = yield call(dxHtmlFetchUrl, action.payload);
        const {
            experienceGUID,
            pageGUID,
            sectionGUID,
        } = action.payload;
        yield put({
            type: HTML_FETCH__SUCCEEDED,
            payload: {
                experienceGUID,
                pageGUID,
                sectionGUID,
                html: response
            },
        });
    } catch (error) {
        yield put({
            type: HTML_FETCH__FAILED,
            payload: error,
        });
    }
}

export function* dxHtmlFetchSaga() {
    yield takeEvery(HTML_FETCH_REQUESTED, dxHtmlFetch);
}

// Fetch experience
export const dxFetchExperienceUrl = () => {
    return (
        apiManager.dxApi(`/experience/list`, {
            Limit: "3",
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
                payload: {
                    message: 'Experience fetch api error'
                },
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
            payload: {
                message: 'Experience fetch api error'
            },
        });
    }
}

export function* dxFetchExperienceSaga() {
    yield takeEvery(EXPERIENCE_FETCH_REQUESTED, dxFetchExperience);
}

// Delete experience
export const dxDeleteExperienceUrl = (params) => {
    let formattedParams = {
        ExperienceGUID: params.experienceGUID
    }
    return (
        apiManager.dxApi(`/experience/delete`, formattedParams, true)
    )
}

export function* dxDeleteExperience(action) {
    try {
        const response = yield call(dxDeleteExperienceUrl, action.payload);
        let { Confirmation, Response, Message } = response;
        if (Confirmation !== 'SUCCESS') {
            yield put({
                type: EXPERIENCE_DELETE__FAILED,
                payload: {
                    message: 'Experience delete api error'
                },
            });
        } else {
            yield put({
                type: EXPERIENCE_DELETE__SUCCEEDED,
                payload: {
                    experienceGUID: action.payload.experienceGUID,
                    message: 'Experience has been deleted'
                },
            });
        }
    } catch (error) {
        yield put({
            type: EXPERIENCE_DELETE__FAILED,
            payload: {
                message: 'Experience delete api error'
            },
        });
    }
}

export function* dxDeleteExperienceSaga() {
    yield takeEvery(EXPERIENCE_DELETE_REQUESTED, dxDeleteExperience);
}