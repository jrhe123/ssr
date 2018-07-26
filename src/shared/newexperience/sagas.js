import { all, call, put, takeEvery } from 'redux-saga/effects';
import FormData from 'form-data';
import * as apiManager from '../helpers/apiManager';
import * as helpers from '../helpers';

import {
    EXPERIENCE_INITIAL_REQUESTED,
    EXPERIENCE_INITIAL__SUCCEEDED,
    EXPERIENCE_INITIAL__FAILED,

    EXPERIENCE_CREATE_REQUESTED,
    EXPERIENCE_CREATE__SUCCEEDED,
    EXPERIENCE_CREATE__FAILED,

    EXPERIENCE_UPLOAD_FILE_REQUESTED,
    EXPERIENCE_UPLOAD_FILE__SUCCEEDED,
    EXPERIENCE_UPLOAD_FILE__FAILED,

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

    EXPERIENCE_PAGE_PAGES_SAVE_REQUESTED,
    EXPERIENCE_PAGE_PAGES_SAVE__SUCCEEDED,
    EXPERIENCE_PAGE_PAGES_SAVE__FAILED,

    EXPERIENCE_PAGE_PAGES_REMOVE_REQUESTED,
    EXPERIENCE_PAGE_PAGES_REMOVE__SUCCEEDED,
    EXPERIENCE_PAGE_PAGES_REMOVE__FAILED,

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

    EXPERIENCE_PAGE_CAROUSEL_ACTIVE_REQUESTED,
    EXPERIENCE_PAGE_CAROUSEL_ACTIVE__SUCCEEDED,
    EXPERIENCE_PAGE_CAROUSEL_ACTIVE__FAILED,

    EXPERIENCE_PAGE_ADD_PAGE_REQUESTED,
    EXPERIENCE_PAGE_ADD_PAGE__SUCCEEDED,
    EXPERIENCE_PAGE_ADD_PAGE__FAILED,

    EXPERIENCE_PAGE_DELETE_PAGE_REQUESTED,
    EXPERIENCE_PAGE_DELETE_PAGE__SUCCEEDED,
    EXPERIENCE_PAGE_DELETE_PAGE__FAILED,

    EXPERIENCE_PAGE_ADD_ELEM_REQUESTED,
    EXPERIENCE_PAGE_ADD_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_ADD_ELEM__FAILED,

    EXPERIENCE_PAGE_DELETE_ELEM_REQUESTED,
    EXPERIENCE_PAGE_DELETE_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_DELETE_ELEM__FAILED,

    EXPERIENCE_PAGE_COPY_ELEM_REQUESTED,
    EXPERIENCE_PAGE_COPY_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_COPY_ELEM__FAILED,

    EXPERIENCE_PAGE_SHUFFLE_ELEM_REQUESTED,
    EXPERIENCE_PAGE_SHUFFLE_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_SHUFFLE_ELEM__FAILED,

    EXPERIENCE_PAGE_SELECT_ELEM_REQUESTED,
    EXPERIENCE_PAGE_SELECT_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_SELECT_ELEM__FAILED,

    EXPERIENCE_PAGE_UPDATE_ELEM_REQUESTED,
    EXPERIENCE_PAGE_UPDATE_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_UPDATE_ELEM__FAILED,

    EXPERIENCE_PAGE_ELEM_CONNECT_PAGE_REQUESTED,
    EXPERIENCE_PAGE_ELEM_CONNECT_PAGE__SUCCEEDED,
    EXPERIENCE_PAGE_ELEM_CONNECT_PAGE__FAILED,

} from './constants';

// Experience init request
export function* dxExperienceInital(action) {
    try {
        yield put({
            type: EXPERIENCE_INITIAL__SUCCEEDED,
            payload: {},
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_INITIAL__FAILED,
            payload: error,
        });
    }
}

export function* dxExperienceInitalSaga() {
    yield takeEvery(EXPERIENCE_INITIAL_REQUESTED, dxExperienceInital);
}

// Experience create request
export const dxExperienceCreateUrl = (params) => {

    let experience = params.experience;
    let {
        type,
        experienceTitle,
        card,
        pages,
    } = experience;
    const formattedParams = {
        ExperienceType: type,
        ExperienceTitle: experienceTitle,
        ExperienceCard: {
            CardGUID: card.cardGUID,
            Type: card.type,
            Title: card.title,
            Content: card.content,
            Settings: helpers.capitalize_array_object_key(card.settings),
        },
        ExperiencePages: __format_experience_params(pages)
    };
    return (
        apiManager.dxApi(`/experience/create`, formattedParams, true)
    )
}

const __format_experience_params = (pages) => {
    let output = [];
    for (let i = 0; i < pages.length; i++) {
        let page = pages[i];
        if (!page.isDeleted) {
            let sections = helpers.remove_is_deleted_item(page.sections);
            sections = __extract_section_values(sections);
            let item = {
                PageGUID: page.pageGUID,
                ParentPageGUID: page.parentPageGUID,
                IsRoot: page.isRoot,
                IsSplash: page.isSplash,
                Title: page.title,
                Sections: sections,
            }
            output.push(item);
        }
    }
    return output;
}

const __extract_section_values = (sections) => {
    let output = [];
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        let item = {
            SectionGUID: section.sectionGUID,
            Type: section.type,
        }
        switch (section.type) {
            case 'EDITOR':
                item.Html = section.html;
                break;
            case 'BUTTON':
                item.BtnContent = section.btnContent;
                item.ConnectedPageGUID = section.connectedPageGUID;
                break;
            case 'EMBED_PDF':
                item.Pdf = section.pdf;
                break;
            case 'SPLASH':
                item.SplashContent = section.splashContent;
                item.SplashImg = section.splashImg;
                item.SplashColor = section.splashColor;
                break;
            case 'VIDEO':
                item.VideoUrl = section.videoUrl;
                break;
            case 'IMAGE':
                item.Img = section.img;
                break;
        }
        output.push(item);
    }
    return output;
}

export function* dxExperienceCreate(action) {
    try {
        const response = yield call(dxExperienceCreateUrl, action.payload);
        let { Confirmation, Response, Message } = response;
        if (Confirmation != 'SUCCESS') {
            yield put({
                type: EXPERIENCE_CREATE__FAILED,
                payload: Message,
            });
        } else {
            yield put({
                type: EXPERIENCE_CREATE__SUCCEEDED,
                payload: {},
            });
        }
    } catch (error) {
        yield put({
            type: EXPERIENCE_CREATE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperienceCreateSaga() {
    yield takeEvery(EXPERIENCE_CREATE_REQUESTED, dxExperienceCreate);
}

// Experience upload file request
export const dxExperienceUploadFileUrl = (params) => {
    let formData = new FormData();
    let blob = new Blob([params.htmlContent], { type: 'text/html' });
    formData.append('File', blob, 'blob.html');
    return (
        apiManager.dxFileApi(`/upload/file`, formData, true)
    )
}

export function* dxExperienceUploadSingleFile(section) {
    try {
        const response = yield call(dxExperienceUploadFileUrl, section)
        return response;
    } catch (err) {
        return err;
    }
}

export function* dxExperienceUploadFiles(action) {
    try {

        let experience = action.payload.experience;
        let {
            type,
            pages,
        } = experience;

        if (type == 0) {
            yield put({
                type: EXPERIENCE_UPLOAD_FILE__SUCCEEDED,
                payload: {
                    experience: action.payload.experience
                },
            });
        } else {

            for (let i = 0; i < pages.length; i++) {
                let page = pages[i];
                if (!page.IsDeleted) {
                    for (let j = 0; j < page.Sections.length; j++) {
                        let section = page.Sections[j];
                        if (!section.IsDeleted && section.Type == 'EDITOR') {
                            let response = yield call(dxExperienceUploadSingleFile, section);
                            if (response.Confirmation == 'SUCCESS') section.html = response.Response.File.FileGUID;
                        }
                    }
                }
            }
        }

        yield put({
            type: EXPERIENCE_UPLOAD_FILE__SUCCEEDED,
            payload: {
                experience
            },
        });

    } catch (error) {
        yield put({
            type: EXPERIENCE_UPLOAD_FILE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperienceUploadFileSaga() {
    yield takeEvery(EXPERIENCE_UPLOAD_FILE_REQUESTED, dxExperienceUploadFiles);
}

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
export const dxExperienceCardTemplateUpdateImageUrl = (params) => {

    let formData = new FormData();
    formData.append('File', params.imgFile);
    return (
        apiManager.dxFileApi(`/upload/image`, formData, true)
    )
}

export function* dxExperienceCardTemplateUpdateImage(action) {
    try {
        const response = yield call(dxExperienceCardTemplateUpdateImageUrl, action.payload);
        let { Confirmation, Response, Message } = response;

        if (Confirmation !== 'SUCCESS') {
            yield put({
                type: EXPERIENCE_CARD_TEMPLATE_UPDATE_IMAGE__FAILED,
                payload: Message,
            });
        } else {
            yield put({
                type: EXPERIENCE_CARD_TEMPLATE_UPDATE_IMAGE__SUCCEEDED,
                payload: {
                    imgFile: Response.Image.ImageGUID,
                },
            });
        }
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

// Experience pages save
export function* dxExperiencePagePagesSave(action) {
    try {
        yield put({
            type: EXPERIENCE_PAGE_PAGES_SAVE__SUCCEEDED,
            payload: {},
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_PAGES_SAVE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePagePagesSaveSaga() {
    yield takeEvery(EXPERIENCE_PAGE_PAGES_SAVE_REQUESTED, dxExperiencePagePagesSave);
}

// Experience pages remove
export function* dxExperiencePagePagesRemove(action) {
    try {
        yield put({
            type: EXPERIENCE_PAGE_PAGES_REMOVE__SUCCEEDED,
            payload: {},
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_PAGES_REMOVE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePagePagesRemoveSaga() {
    yield takeEvery(EXPERIENCE_PAGE_PAGES_REMOVE_REQUESTED, dxExperiencePagePagesRemove);
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

// Experience page carousel active page
export function* dxExperiencePageCarouselPageActive(action) {
    try {
        yield put({
            type: EXPERIENCE_PAGE_CAROUSEL_ACTIVE__SUCCEEDED,
            payload: {
                pageGUID: action.payload.pageGUID,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_CAROUSEL_ACTIVE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePageCarouselPageActiveSaga() {
    yield takeEvery(EXPERIENCE_PAGE_CAROUSEL_ACTIVE_REQUESTED, dxExperiencePageCarouselPageActive);
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

// Experience page delete page
export function* dxExperiencePageDeletePage(action) {
    try {
        yield put({
            type: EXPERIENCE_PAGE_DELETE_PAGE__SUCCEEDED,
            payload: {
                pageGUID: action.payload.pageGUID,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_DELETE_PAGE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePageDeletePageSaga() {
    yield takeEvery(EXPERIENCE_PAGE_DELETE_PAGE_REQUESTED, dxExperiencePageDeletePage);
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

// Experience page delete elem
export function* dxExperiencePageDeleteElem(action) {
    try {
        yield put({
            type: EXPERIENCE_PAGE_DELETE_ELEM__SUCCEEDED,
            payload: {
                sectionGUID: action.payload.sectionGUID,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_DELETE_ELEM__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePageDeleteElemSaga() {
    yield takeEvery(EXPERIENCE_PAGE_DELETE_ELEM_REQUESTED, dxExperiencePageDeleteElem);
}

// Experience page copy elem
export function* dxExperiencePageCopyElem(action) {
    try {
        yield put({
            type: EXPERIENCE_PAGE_COPY_ELEM__SUCCEEDED,
            payload: {
                sectionGUID: action.payload.sectionGUID,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_COPY_ELEM__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePageCopyElemSaga() {
    yield takeEvery(EXPERIENCE_PAGE_COPY_ELEM_REQUESTED, dxExperiencePageCopyElem);
}

// Experience page shuffle elem
export function* dxExperiencePageShuffleElem(action) {
    try {
        yield put({
            type: EXPERIENCE_PAGE_SHUFFLE_ELEM__SUCCEEDED,
            payload: {
                dragIndex: action.payload.dragIndex,
                hoverIndex: action.payload.hoverIndex,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_SHUFFLE_ELEM__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePageShuffleElemSaga() {
    yield takeEvery(EXPERIENCE_PAGE_SHUFFLE_ELEM_REQUESTED, dxExperiencePageShuffleElem);
}

// Experience page select elem
export function* dxExperiencePageSelectElem(action) {
    try {
        yield put({
            type: EXPERIENCE_PAGE_SELECT_ELEM__SUCCEEDED,
            payload: {
                sectionGUID: action.payload.sectionGUID,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_SELECT_ELEM__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePageSelectElemSaga() {
    yield takeEvery(EXPERIENCE_PAGE_SELECT_ELEM_REQUESTED, dxExperiencePageSelectElem);
}

// Experience page update elem
export const dxExperiencePageUpdatePDFUrl = (params) => {
    let formData = new FormData();
    formData.append('File', params.content);
    return (
        apiManager.dxFileApi(`/upload/file`, formData, true)
    )
}

export const dxExperiencePageUpdateImageUrl = (params) => {

    let formData = new FormData();
    formData.append('File', params.content);
    return (
        apiManager.dxFileApi(`/upload/image`, formData, true)
    )
}

export function* dxExperiencePageUpdateElem(action) {
    try {
        let type = action.payload.type;

        if (type == 'EMBED_PDF') {

            const response = yield call(dxExperiencePageUpdatePDFUrl, action.payload);
            let { Confirmation, Response, Message } = response;

            if (Confirmation !== 'SUCCESS') {
                yield put({
                    type: EXPERIENCE_PAGE_UPDATE_ELEM__FAILED,
                    payload: Message,
                });
            } else {
                yield put({
                    type: EXPERIENCE_PAGE_UPDATE_ELEM__SUCCEEDED,
                    payload: {
                        sectionGUID: action.payload.sectionGUID,
                        type: type,
                        content: Response.File.FileGUID,
                    },
                });
            }
        } else if (type == 'SPLASH_IMG' || type == 'IMAGE') {

            const response = yield call(dxExperiencePageUpdateImageUrl, action.payload);
            let { Confirmation, Response, Message } = response;

            if (Confirmation !== 'SUCCESS') {
                yield put({
                    type: EXPERIENCE_PAGE_UPDATE_ELEM__FAILED,
                    payload: Message,
                });
            } else {
                yield put({
                    type: EXPERIENCE_PAGE_UPDATE_ELEM__SUCCEEDED,
                    payload: {
                        sectionGUID: action.payload.sectionGUID,
                        type: type,
                        content: Response.Image.ImageGUID,
                    },
                });
            }
        } else {
            yield put({
                type: EXPERIENCE_PAGE_UPDATE_ELEM__SUCCEEDED,
                payload: {
                    sectionGUID: action.payload.sectionGUID,
                    type: type,
                    content: action.payload.content,
                },
            });
        }
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_UPDATE_ELEM__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePageUpdateElemSaga() {
    yield takeEvery(EXPERIENCE_PAGE_UPDATE_ELEM_REQUESTED, dxExperiencePageUpdateElem);
}

// Experience page elem connect page
export function* dxExperiencePageElemConnectPage(action) {
    try {
        yield put({
            type: EXPERIENCE_PAGE_ELEM_CONNECT_PAGE__SUCCEEDED,
            payload: {
                sectionGUID: action.payload.sectionGUID,
                pageGUID: action.payload.pageGUID,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_ELEM_CONNECT_PAGE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePageElemConnectPageSaga() {
    yield takeEvery(EXPERIENCE_PAGE_ELEM_CONNECT_PAGE_REQUESTED, dxExperiencePageElemConnectPage);
}