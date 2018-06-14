import { all, call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
    EXPERIENCE_TYPE_REQUESTED,
    EXPERIENCE_TYPE__SUCCEEDED,
    EXPERIENCE_TYPE__FAILED,

    EXPERIENCE_TYPE_UPDATE_REQUESTED,
    EXPERIENCE_TYPE_UPDATE__SUCCEEDED,
    EXPERIENCE_TYPE_UPDATE__FAILED,

    EXPERIENCE_INDEX_UPDATE_REQUESTED,
    EXPERIENCE_INDEX_UPDATE__SUCCEEDED,
    EXPERIENCE_INDEX_UPDATE__FAILED,

    EXPERIENCE_TITLE_UPDATE_REQUESTED,
    EXPERIENCE_TITLE_UPDATE__SUCCEEDED,
    EXPERIENCE_TITLE_UPDATE__FAILED,
} from './constants';

// Experience type request
export function* experienceType(action) {
    try {
        yield put({
            type: EXPERIENCE_TYPE__SUCCEEDED,
            payload: {
                experienceType: action.payload.experienceType
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_TYPE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperienceTypeSaga() {
    yield takeEvery(EXPERIENCE_TYPE_REQUESTED, experienceType);
}

// Experience type update
export function* experienceTypeUpdate(action) {
    try {
        yield put({
            type: EXPERIENCE_TYPE_UPDATE__SUCCEEDED,
            payload: {
                experienceType: action.payload.experienceType
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_TYPE_UPDATE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperienceTypeUpdateSaga() {
    yield takeEvery(EXPERIENCE_TYPE_UPDATE_REQUESTED, experienceTypeUpdate);
}

// Experience index update
export function* experienceIndexUpdate(action) {
    try {
        yield put({
            type: EXPERIENCE_INDEX_UPDATE__SUCCEEDED,
            payload: {
                experienceIndex: action.payload.experienceIndex
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_INDEX_UPDATE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperienceIndexUpdateSaga() {
    yield takeEvery(EXPERIENCE_INDEX_UPDATE_REQUESTED, experienceIndexUpdate);
}

// Experience title update
export function* experienceTitleUpdate(action) {
    try {
        yield put({
            type: EXPERIENCE_TITLE_UPDATE__SUCCEEDED,
            payload: {
                type: action.payload.type,
                title: action.payload.title,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_TITLE_UPDATE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperienceTitleUpdateSaga() {
    yield takeEvery(EXPERIENCE_TITLE_UPDATE_REQUESTED, experienceTitleUpdate);
}