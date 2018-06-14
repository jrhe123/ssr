import { all, call, put, takeEvery } from 'redux-saga/effects';
import fetch from 'isomorphic-fetch';

import {
    EXPERIENCE_TYPE_REQUESTED,
    EXPERIENCE_TYPE__SUCCEEDED,
    EXPERIENCE_TYPE__FAILED,
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