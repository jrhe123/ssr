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

    EXPERIENCE_CARD_TEMPLATE_TOGGLE_REQUESTED,
    EXPERIENCE_CARD_TEMPLATE_TOGGLE__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_TOGGLE__FAILED,

    EXPERIENCE_CARD_TEMPLATE_FETCH_REQUESTED,
    EXPERIENCE_CARD_TEMPLATE_FETCH__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_FETCH__FAILED,

    EXPERIENCE_CARD_TEMPLATE_SELECT_REQUESTED,
    EXPERIENCE_CARD_TEMPLATE_SELECT__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_SELECT__FAILED,

    EXPERIENCE_CARD_TEMPLATE_UPDATE_IMAGE_REQUESTED,
    EXPERIENCE_CARD_TEMPLATE_UPDATE_IMAGE__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_UPDATE_IMAGE__FAILED,

    EXPERIENCE_CARD_TEMPLATE_UPDATE_COLOR_REQUESTED,
    EXPERIENCE_CARD_TEMPLATE_UPDATE_COLOR__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_UPDATE_COLOR__FAILED,

    EXPERIENCE_CARD_TEMPLATE_UPDATE_CONTENT_REQUESTED,
    EXPERIENCE_CARD_TEMPLATE_UPDATE_CONTENT__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_UPDATE_CONTENT__FAILED,

    EXPERIENCE_CARD_TEMPLATE_SAVE_REQUESTED,
    EXPERIENCE_CARD_TEMPLATE_SAVE__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_SAVE__FAILED,

    EXPERIENCE_CARD_TEMPLATE_REMOVE_REQUESTED,
    EXPERIENCE_CARD_TEMPLATE_REMOVE__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_REMOVE__FAILED,

    EXPERIENCE_PAGE_TEMPLATE_OPTION_SELECT_REQUESTED,
    EXPERIENCE_PAGE_TEMPLATE_OPTION_SELECT__SUCCEEDED,
    EXPERIENCE_PAGE_TEMPLATE_OPTION_SELECT__FAILED,

    EXPERIENCE_PAGE_TEMPLATE_TOGGLE_REQUESTED,
    EXPERIENCE_PAGE_TEMPLATE_TOGGLE__SUCCEEDED,
    EXPERIENCE_PAGE_TEMPLATE_TOGGLE__FAILED,

    EXPERIENCE_PAGE_TEMPLATE_FETCH_REQUESTED,
    EXPERIENCE_PAGE_TEMPLATE_FETCH__SUCCEEDED,
    EXPERIENCE_PAGE_TEMPLATE_FETCH__FAILED,

    EXPERIENCE_PAGE_CAROUSEL_TOGGLE_REQUESTED,
    EXPERIENCE_PAGE_CAROUSEL_TOGGLE__SUCCEEDED,
    EXPERIENCE_PAGE_CAROUSEL_TOGGLE__FAILED,

    EXPERIENCE_PAGE_ADD_PAGE_REQUESTED,
    EXPERIENCE_PAGE_ADD_PAGE__SUCCEEDED,
    EXPERIENCE_PAGE_ADD_PAGE__FAILED,

    EXPERIENCE_PAGE_ADD_ELEM_REQUESTED,
    EXPERIENCE_PAGE_ADD_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_ADD_ELEM__FAILED,

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

// Experience card template toggle
export function* dxExperienceCardTemplateMenuToggle(action) {
    try {
        yield put({
            type: EXPERIENCE_CARD_TEMPLATE_TOGGLE__SUCCEEDED,
            payload: {
                toggle: action.payload.toggle,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_CARD_TEMPLATE_TOGGLE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperienceCardTemplateMenuToggleSaga() {
    yield takeEvery(EXPERIENCE_CARD_TEMPLATE_TOGGLE_REQUESTED, dxExperienceCardTemplateMenuToggle);
}

// Experience card template fetch
export function* dxExperienceCardTemplateFetch(action) {
    try {
        yield put({
            type: EXPERIENCE_CARD_TEMPLATE_FETCH__SUCCEEDED,
            payload: {
                templates: action.payload.templates,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_CARD_TEMPLATE_FETCH__FAILED,
            payload: error,
        });
    }
}

export function* dxExperienceCardTemplateFetchSaga() {
    yield takeEvery(EXPERIENCE_CARD_TEMPLATE_FETCH_REQUESTED, dxExperienceCardTemplateFetch);
}

// Experience card template select
export function* dxExperienceCardTemplateSelect(action) {
    try {
        yield put({
            type: EXPERIENCE_CARD_TEMPLATE_SELECT__SUCCEEDED,
            payload: {
                template: action.payload.template,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_CARD_TEMPLATE_SELECT__FAILED,
            payload: error,
        });
    }
}

export function* dxExperienceCardTemplateSelectSaga() {
    yield takeEvery(EXPERIENCE_CARD_TEMPLATE_SELECT_REQUESTED, dxExperienceCardTemplateSelect);
}

// Experience card template update image
export function* dxExperienceCardTemplateUpdateImage(action) {
    try {
        yield put({
            type: EXPERIENCE_CARD_TEMPLATE_UPDATE_IMAGE__SUCCEEDED,
            payload: {
                imgFile: action.payload.imgFile,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_CARD_TEMPLATE_UPDATE_IMAGE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperienceCardTemplateUpdateImageSaga() {
    yield takeEvery(EXPERIENCE_CARD_TEMPLATE_UPDATE_IMAGE_REQUESTED, dxExperienceCardTemplateUpdateImage);
}

// Experience card template update color
export function* dxExperienceCardTemplateUpdateColor(action) {
    try {
        yield put({
            type: EXPERIENCE_CARD_TEMPLATE_UPDATE_COLOR__SUCCEEDED,
            payload: {
                color: action.payload.color,
                type: action.payload.type,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_CARD_TEMPLATE_UPDATE_COLOR__FAILED,
            payload: error,
        });
    }
}

export function* dxExperienceCardTemplateUpdateColorSaga() {
    yield takeEvery(EXPERIENCE_CARD_TEMPLATE_UPDATE_COLOR_REQUESTED, dxExperienceCardTemplateUpdateColor);
}

// Experience card template update content
export function* dxExperienceCardTemplateUpdateContent(action) {
    try {
        yield put({
            type: EXPERIENCE_CARD_TEMPLATE_UPDATE_CONTENT__SUCCEEDED,
            payload: {
                content: action.payload.content
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_CARD_TEMPLATE_UPDATE_CONTENT__FAILED,
            payload: error,
        });
    }
}

export function* dxExperienceCardTemplateUpdateContentSaga() {
    yield takeEvery(EXPERIENCE_CARD_TEMPLATE_UPDATE_CONTENT_REQUESTED, dxExperienceCardTemplateUpdateContent);
}

// Experience card template save
export function* dxExperienceCardTemplateSave(action) {
    try {
        yield put({
            type: EXPERIENCE_CARD_TEMPLATE_SAVE__SUCCEEDED,
            payload: {},
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_CARD_TEMPLATE_SAVE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperienceCardTemplateSaveSaga() {
    yield takeEvery(EXPERIENCE_CARD_TEMPLATE_SAVE_REQUESTED, dxExperienceCardTemplateSave);
}

// Experience card template remove
export function* dxExperienceCardTemplateRemove(action) {
    try {
        yield put({
            type: EXPERIENCE_CARD_TEMPLATE_REMOVE__SUCCEEDED,
            payload: {},
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_CARD_TEMPLATE_REMOVE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperienceCardTemplateRemoveSaga() {
    yield takeEvery(EXPERIENCE_CARD_TEMPLATE_REMOVE_REQUESTED, dxExperienceCardTemplateRemove);
}

// Experience page template toggle
export function* dxExperiencePageTemplateMenuToggle(action) {
    try {
        yield put({
            type: EXPERIENCE_PAGE_TEMPLATE_TOGGLE__SUCCEEDED,
            payload: {
                toggle: action.payload.toggle,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_TEMPLATE_TOGGLE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePageTemplateMenuToggleSaga() {
    yield takeEvery(EXPERIENCE_PAGE_TEMPLATE_TOGGLE_REQUESTED, dxExperiencePageTemplateMenuToggle);
}

// Experience page template option select
export function* dxExperiencePageTemplateOptionSelect(action) {
    try {
        yield put({
            type: EXPERIENCE_PAGE_TEMPLATE_OPTION_SELECT__SUCCEEDED,
            payload: {
                index: action.payload.index
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_TEMPLATE_OPTION_SELECT__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePageTemplateOptionSelectSaga() {
    yield takeEvery(EXPERIENCE_PAGE_TEMPLATE_OPTION_SELECT_REQUESTED, dxExperiencePageTemplateOptionSelect);
}

// Experience page template fetch
export function* dxExperiencePageTemplateFetch(action) {
    try {
        yield put({
            type: EXPERIENCE_PAGE_TEMPLATE_FETCH__SUCCEEDED,
            payload: {
                templates: action.payload.templates,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_TEMPLATE_FETCH__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePageTemplateFetchSaga() {
    yield takeEvery(EXPERIENCE_PAGE_TEMPLATE_FETCH_REQUESTED, dxExperiencePageTemplateFetch);
}

// Experience page carousel menu toggle
export function* dxExperiencePageCarouselMenuToggle(action) {
    try {
        yield put({
            type: EXPERIENCE_PAGE_CAROUSEL_TOGGLE__SUCCEEDED,
            payload: {
                toggle: action.payload.toggle,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_CAROUSEL_TOGGLE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePageCarouselMenuToggleSaga() {
    yield takeEvery(EXPERIENCE_PAGE_CAROUSEL_TOGGLE_REQUESTED, dxExperiencePageCarouselMenuToggle);
}

// Experience page add page
export function* dxExperiencePageAddPage(action) {
    try {
        yield put({
            type: EXPERIENCE_PAGE_ADD_PAGE__SUCCEEDED,
            payload: {},
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_ADD_PAGE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePageAddPageSaga() {
    yield takeEvery(EXPERIENCE_PAGE_ADD_PAGE_REQUESTED, dxExperiencePageAddPage);
}

// Experience page add elem
export function* dxExperiencePageAddElem(action) {
    try {
        yield put({
            type: EXPERIENCE_PAGE_ADD_ELEM__SUCCEEDED,
            payload: {
                type: action.payload.type,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_ADD_ELEM__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePageAddElemSaga() {
    yield takeEvery(EXPERIENCE_PAGE_ADD_ELEM_REQUESTED, dxExperiencePageAddElem);
}