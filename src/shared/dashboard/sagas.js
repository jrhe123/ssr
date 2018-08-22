import { all, call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

// config
import config from '../config';

// helpers
import * as apiManager from '../helpers/apiManager';

import {
    DASHBOARD_NAVI_REQUESTED,
    DASHBOARD_NAVI__SUCCEEDED,
    DASHBOARD_NAVI__FAILED,

    LOGOUT_REQUESTED,
    LOGOUT__SUCCEEDED,
    LOGOUT__FAILED,

    CHANNEL_FETCH_REQUESTED,
    CHANNEL_FETCH__SUCCEEDED,
    CHANNEL_FETCH__FAILED,

    CHANNEL_UPDATE_STATUS_REQUESTED,
    CHANNEL_UPDATE_STATUS__SUCCEEDED,
    CHANNEL_UPDATE_STATUS__FAILED,

    HTML_FETCH_REQUESTED,
    HTML_FETCH__SUCCEEDED,
    HTML_FETCH__FAILED,

    EXPERIENCE_FETCH_REQUESTED,
    EXPERIENCE_FETCH__SUCCEEDED,
    EXPERIENCE_FETCH__FAILED,

    EXPERIENCE_DELETE_REQUESTED,
    EXPERIENCE_DELETE__SUCCEEDED,
    EXPERIENCE_DELETE__FAILED,

    STREAM_CHANNEL_FETCH_REQUESTED,
    STREAM_CHANNEL_FETCH__SUCCEEDED,
    STREAM_CHANNEL_FETCH__FAILED,

    STREAM_CHANNEL_SELECT_REQUESTED,
    STREAM_CHANNEL_SELECT__SUCCEEDED,
    STREAM_CHANNEL_SELECT__FAILED,

    STREAM_CREATE_REQUESTED,
    STREAM_CREATE__SUCCEEDED,
    STREAM_CREATE__FAILED,

    STREAM_REMOVE_REQUESTED,
    STREAM_REMOVE__SUCCEEDED,
    STREAM_REMOVE__FAILED,

} from './constants';

// Dashboard navi
export function* dxDashboardNavi(action) {
    try {
        yield put({
            type: DASHBOARD_NAVI__SUCCEEDED,
            payload: {
                index: action.payload.index,
            },
        });
    } catch (error) {
        yield put({
            type: DASHBOARD_NAVI__FAILED,
            payload: error,
        });
    }
}

export function* dxDashboardNaviSaga() {
    yield takeEvery(DASHBOARD_NAVI_REQUESTED, dxDashboardNavi);
}

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
            Limit: "-1",
            Offset: "0",
            Extra: {
                ChannelStatus: ''
            },
        }, true)
    )
}

export function* dxFetchChannel(action) {
    try {
        const response = yield call(dxFetchChannelUrl, action.payload);
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
                type: CHANNEL_UPDATE_STATUS__FAILED,
                payload: {
                    message: 'Experience channel status update api error'
                },
            });
        } else {
            yield put({
                type: CHANNEL_UPDATE_STATUS__SUCCEEDED,
                payload: {
                    experienceChannel: Response.ExperienceChannel,
                    message: 'Experience channel status has been updated'
                },
            });
        }
    } catch (error) {
        yield put({
            type: CHANNEL_UPDATE_STATUS__FAILED,
            payload: {
                message: 'Experience channel status update api error'
            },
        });
    }
}

export function* dxUpdateChannelSaga() {
    yield takeEvery(CHANNEL_UPDATE_STATUS_REQUESTED, dxUpdateChannel);
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

// Stream Fetch Active Channel
export function* dxFetchStreamChannel(action) {
    try {
        const response = yield call(dxFetchChannelUrl, action.payload);
        let { Confirmation, Response, Message } = response;
        if (Confirmation !== 'SUCCESS') {
            yield put({
                type: STREAM_CHANNEL_FETCH__FAILED,
                payload: {
                    message: 'Experience channel fetch api error'
                },
            });
        } else {
            yield put({
                type: STREAM_CHANNEL_FETCH__SUCCEEDED,
                payload: {
                    totalRecord: Response.TotalRecord,
                    expereienceChannels: Response.ExperienceChannels,
                },
            });
        }
    } catch (error) {
        yield put({
            type: STREAM_CHANNEL_FETCH__FAILED,
            payload: {
                message: 'Experience channel fetch api error'
            },
        });
    }
}

export function* dxFetchStreamChannelSaga() {
    yield takeEvery(STREAM_CHANNEL_FETCH_REQUESTED, dxFetchStreamChannel);
}

// Stream channel select
export const dxSelectStreamChannelUrl = (params) => {
    let formattedParams = {
        ExperienceChannelGUID: params.channel.ExperienceChannelGUID,
        Limit: "-1",
        Offset: "0",
        Extra: {}
    }
    return (
        apiManager.dxApi(`/experience/stream_list_by_channel_guid`, formattedParams, true)
    )
}

export function* dxSelectStreamChannel(action) {

    try {
        const response = yield call(dxSelectStreamChannelUrl, action.payload);
        let { Confirmation, Response, Message } = response;
        if (Confirmation !== 'SUCCESS') {
            yield put({
                type: STREAM_CHANNEL_SELECT__FAILED,
                payload: {
                    message: 'Experience stream list api error'
                },
            });
        } else {
            yield put({
                type: STREAM_CHANNEL_SELECT__SUCCEEDED,
                payload: {
                    channel: action.payload.channel,
                    liveExperienceStreams: Response.LiveExperienceStreams,
                    pendingExperiences: Response.PendingExperiences,
                },
            });
        }
    } catch (error) {
        yield put({
            type: STREAM_CHANNEL_SELECT__FAILED,
            payload: {
                message: 'Experience stream list api error'
            },
        });
    }
}

export function* dxSelectStreamChannelSaga() {
    yield takeEvery(STREAM_CHANNEL_SELECT_REQUESTED, dxSelectStreamChannel);
}

// Create Stream
export const dxCreateStreamUrl = (params) => {
    let formattedParams = {
        ExperienceChannelGUID: params.channel.ExperienceChannelGUID,
        ExperienceGUID: params.experience.ExperienceGUID
    }
    return (
        apiManager.dxApi(`/stream/create`, formattedParams, true)
    )
}

export function* dxCreateStream(action) {
    try {
        const response = yield call(dxCreateStreamUrl, action.payload);
        let { Confirmation, Response, Message } = response;
        if (Confirmation !== 'SUCCESS') {
            yield put({
                type: STREAM_CREATE__FAILED,
                payload: {
                    message: 'Stream create api error'
                },
            });
        } else {
            yield put({
                type: STREAM_CREATE__SUCCEEDED,
                payload: {
                    experience: action.payload.experience,
                    experienceStream: Response.ExperienceStream,
                    message: 'Stream has been created'
                },
            });
        }
    } catch (error) {
        yield put({
            type: STREAM_CREATE__FAILED,
            payload: {
                message: 'Stream create api error'
            },
        });
    }
}

export function* dxCreateStreamSaga() {
    yield takeEvery(STREAM_CREATE_REQUESTED, dxCreateStream);
}

// Remove Stream
export const dxRemoveStreamUrl = (params) => {
    let formattedParams = {
        ExperienceStreamGUID: params.experienceStreamGUID,
    }
    return (
        apiManager.dxApi(`/stream/delete`, formattedParams, true)
    )
}

export function* dxRemoveStream(action) {
    try {
        const response = yield call(dxRemoveStreamUrl, action.payload);
        let { Confirmation, Response, Message } = response;
        if (Confirmation !== 'SUCCESS') {
            yield put({
                type: STREAM_REMOVE__FAILED,
                payload: {
                    message: 'Stream remove api error'
                },
            });
        } else {
            yield put({
                type: STREAM_REMOVE__SUCCEEDED,
                payload: {
                    experienceStreamGUID: action.payload.experienceStreamGUID,
                    message: 'Stream has been removed'
                },
            });
        }
    } catch (error) {
        yield put({
            type: STREAM_REMOVE__FAILED,
            payload: {
                message: 'Stream remove api error'
            },
        });
    }
}

export function* dxRemoveStreamSaga() {
    yield takeEvery(STREAM_REMOVE_REQUESTED, dxRemoveStream);
}