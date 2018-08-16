import { all, call, put, takeEvery } from 'redux-saga/effects';
import FormData from 'form-data';
import * as apiManager from '../helpers/apiManager';
import * as helpers from '../helpers';

// config
import config from '../config';

import {
    // CREATE EXPIERENCE
    EXPERIENCE_INITIAL_REQUESTED,
    EXPERIENCE_INITIAL__SUCCEEDED,
    EXPERIENCE_INITIAL__FAILED,

    EXPERIENCE_CREATE_REQUESTED,
    EXPERIENCE_CREATE__SUCCEEDED,
    EXPERIENCE_CREATE__FAILED,

    EXPERIENCE_UPLOAD_FILE_REQUESTED,
    EXPERIENCE_UPLOAD_FILE__SUCCEEDED,
    EXPERIENCE_UPLOAD_FILE__FAILED,

    EXPERIENCE_UPLOAD_GOOGLE_FILE_REQUESTED,
    EXPERIENCE_UPLOAD_GOOGLE_FILE__SUCCEEDED,
    EXPERIENCE_UPLOAD_GOOGLE_FILE__FAILED,

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

    EXPERIENCE_PAGE_SET_ROOT_REQUESTED,
    EXPERIENCE_PAGE_SET_ROOT__SUCCEEDED,
    EXPERIENCE_PAGE_SET_ROOT__FAILED,

    EXPERIENCE_PAGE_DOC_PANEL_TOGGLE_REQUESTED,
    EXPERIENCE_PAGE_DOC_PANEL_TOGGLE__SUCCEEDED,
    EXPERIENCE_PAGE_DOC_PANEL_TOGGLE__FAILED,

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


    // UPDATE EXPERIENCE
    EXPERIENCE_VIEW_REQUESTED,
    EXPERIENCE_VIEW__SUCCEEDED,
    EXPERIENCE_VIEW__FAILED,

    EXPERIENCE_VIEW_HTML_FETCH_REQUESTED,
    EXPERIENCE_VIEW_HTML_FETCH__SUCCEEDED,
    EXPERIENCE_VIEW_HTML_FETCH__FAILED,

    EXPERIENCE_UPDATE_REQUESTED,
    EXPERIENCE_UPDATE__SUCCEEDED,
    EXPERIENCE_UPDATE__FAILED,

    EXPERIENCE_UPDATE_FILE_REQUESTED,
    EXPERIENCE_UPDATE_FILE__SUCCEEDED,
    EXPERIENCE_UPDATE_FILE__FAILED,

} from './constants';


// CREATE EXPIERENCE
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
        Type,
        ExperienceTitle,
        CardTitle,
        Card,
        Pages,
    } = experience;
    const formattedParams = {
        ExperienceType: Type.toString(),
        ExperienceTitle: ExperienceTitle ? ExperienceTitle.trim() : '',
        ExperienceCard: {
            CardGUID: Card.CardGUID,
            Type: Card.Type,
            Title: CardTitle ? CardTitle.trim() : '',
            Content: Card.Content ? Card.Content.trim() : '',
            Settings: Card.Settings,
        },
        ExperiencePages: __format_experience_params(Pages)
    };
    return (
        apiManager.dxApi(`/experience/create`, formattedParams, true)
    )
}

const __format_experience_params = (pages) => {
    let output = [];
    for (let i = 0; i < pages.length; i++) {
        let page = pages[i];
        if (!page.IsDeleted) {
            let sections = helpers.remove_is_deleted_item(page.Sections);
            sections = __extract_section_values(sections);
            let item = {
                ExperiencePageGUID: page.ExperiencePageGUID,
                PageGUID: page.PageGUID,
                ParentPageGUID: page.ParentPageGUID,
                IsRoot: page.IsRoot,
                IsSplash: page.IsSplash,
                Title: page.Title ? page.Title.trim() : '',
                IsConnected: page.IsConnected,
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
            SectionGUID: section.SectionGUID,
            Type: section.Type,
        }
        switch (section.Type) {
            case 'EDITOR':
                item.Html = section.Html;
                break;
            case 'BUTTON':
                item.BtnContent = section.BtnContent;
                item.ConnectedPageGUID = section.ConnectedPageGUID;
                break;
            case 'EMBED_PDF':
                item.Pdf = section.Pdf;
                break;
            case 'SPLASH':
                item.SplashContent = section.SplashContent;
                item.SplashImg = section.SplashImg;
                item.SplashColor = section.SplashColor;
                break;
            case 'VIDEO':
                item.VideoUrl = section.VideoUrl;
                break;
            case 'IMAGE':
                item.Img = section.Img;
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
                payload: {
                    message: 'Experience create api error'
                },
            });
        } else {
            yield put({
                type: EXPERIENCE_CREATE__SUCCEEDED,
                payload: {
                    message: 'Experience has been created'
                },
            });
        }
    } catch (error) {
        yield put({
            type: EXPERIENCE_CREATE__FAILED,
            payload: {
                message: 'Experience create api error'
            },
        });
    }
}

export function* dxExperienceCreateSaga() {
    yield takeEvery(EXPERIENCE_CREATE_REQUESTED, dxExperienceCreate);
}

// Experience upload file request
export const dxExperienceUploadFileUrl = (params) => {
    let formData = new FormData();
    let blob = new Blob([params.HtmlContent == '' ? ' ' : params.HtmlContent], { type: 'text/html' });
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
            Type,
            Pages,
        } = experience;

        if (Type == 0) {
            yield put({
                type: EXPERIENCE_UPLOAD_FILE__SUCCEEDED,
                payload: {
                    experience: action.payload.experience
                },
            });
        } else {

            for (let i = 0; i < Pages.length; i++) {
                let page = Pages[i];
                if (!page.IsDeleted) {
                    for (let j = 0; j < page.Sections.length; j++) {
                        let section = page.Sections[j];
                        if (!section.IsDeleted && section.Type == 'EDITOR') {
                            let response = yield call(dxExperienceUploadSingleFile, section);
                            if (response.Confirmation == 'SUCCESS') section.Html = response.Response.File.FileGUID;
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

// Experience upload google file request
export const dxExperienceUploadGoogleFileUrl = (params) => {
    let formData = new FormData();
    formData.append('File', params.file);
    return (
        apiManager.dxFileApi(`/upload/doc_file`, formData, true)
    )
}

export function* dxExperienceUploadGoogleFile(action) {
    try {
        const response = yield call(dxExperienceUploadGoogleFileUrl, action.payload);
        let { Confirmation, Response, Message } = response;
        if (Confirmation != 'SUCCESS') {
            yield put({
                type: EXPERIENCE_UPLOAD_GOOGLE_FILE__FAILED,
                payload: {
                    message: 'Upload google file error'
                },
            });
        } else {
            yield put({
                type: EXPERIENCE_UPLOAD_GOOGLE_FILE__SUCCEEDED,
                payload: {
                    fileName: action.payload.file.name,
                    googleFileGUID: Response.GoogleFileGUID
                },
            });
        }
    } catch (error) {
        yield put({
            type: EXPERIENCE_UPLOAD_GOOGLE_FILE__FAILED,
            payload: {
                message: 'Upload google file error'
            },
        });
    }
}

export function* dxExperienceUploadGoogleFileSaga() {
    yield takeEvery(EXPERIENCE_UPLOAD_GOOGLE_FILE_REQUESTED, dxExperienceUploadGoogleFile);
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

// Experience pages set root page
export function* dxExperiencePageSetRootPage(action) {
    try {
        yield put({
            type: EXPERIENCE_PAGE_SET_ROOT__SUCCEEDED,
            payload: {},
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_SET_ROOT__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePageSetRootPageSaga() {
    yield takeEvery(EXPERIENCE_PAGE_SET_ROOT_REQUESTED, dxExperiencePageSetRootPage);
}

// Experience page google doc panel toggle
export function* dxExperiencePageDocPanelToggle(action) {
    try {
        yield put({
            type: EXPERIENCE_PAGE_DOC_PANEL_TOGGLE__SUCCEEDED,
            payload: {
                index: action.payload.index,
                toggle: action.payload.toggle,
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_DOC_PANEL_TOGGLE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperiencePageDocPanelToggleSaga() {
    yield takeEvery(EXPERIENCE_PAGE_DOC_PANEL_TOGGLE_REQUESTED, dxExperiencePageDocPanelToggle);
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
                    payload: {
                        message: 'PDF upload error'
                    },
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
                    payload: {
                        message: 'Image upload error'
                    },
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
                    pageGUID: action.payload.pageGUID,
                },
            });
        }
    } catch (error) {
        yield put({
            type: EXPERIENCE_PAGE_UPDATE_ELEM__FAILED,
            payload: {
                message: 'Element upload error'
            },
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


// UPDATE EXPERIENCE
// View Experience
export const dxExperienceViewUrl = (params) => {
    return (
        apiManager.dxApi(`/experience/view`, { ExperienceGUID: params.experienceGUID }, true)
    )
}

export function* dxExperienceView(action) {
    try {
        const response = yield call(dxExperienceViewUrl, action.payload);
        let { Confirmation, Response, Message } = response;
        if (Confirmation != 'SUCCESS') {
            yield put({
                type: EXPERIENCE_VIEW__FAILED,
                payload: {
                    message: 'Experience view api error'
                },
            });
        } else {
            yield put({
                type: EXPERIENCE_VIEW__SUCCEEDED,
                payload: {
                    experience: Response
                },
            });
        }
    } catch (error) {
        yield put({
            type: EXPERIENCE_VIEW__FAILED,
            payload: {
                message: 'Experience view api error'
            },
        });
    }
}

export function* dxExperienceViewSaga() {
    yield takeEvery(EXPERIENCE_VIEW_REQUESTED, dxExperienceView);
}

// View Experience Html loading
export const dxExperienceViewHtmlFetchUrl = (params) => {
    let guid = params.guid;
    return (
        apiManager.dxHtmlApi(`${config.fileHost}/${guid}.html`)
    )
}

export function* dxExperienceViewHtmlFetch(action) {
    try {
        const response = yield call(dxExperienceViewHtmlFetchUrl, action.payload);
        const {
            pageGUID,
            sectionGUID,
        } = action.payload;
        yield put({
            type: EXPERIENCE_VIEW_HTML_FETCH__SUCCEEDED,
            payload: {
                pageGUID,
                sectionGUID,
                html: response
            },
        });
    } catch (error) {
        yield put({
            type: EXPERIENCE_VIEW_HTML_FETCH__FAILED,
            payload: error,
        });
    }
}

export function* dxExperienceViewHtmlFetchSaga() {
    yield takeEvery(EXPERIENCE_VIEW_HTML_FETCH_REQUESTED, dxExperienceViewHtmlFetch);
}

// Experience update file request
export const dxExperienceUpdateSingleFileUrl = (params) => {
    let formData = new FormData();
    let blob = new Blob([params.HtmlContent == '' ? ' ' : params.HtmlContent], { type: 'text/html' });
    formData.append('File', blob, 'blob.html');
    formData.append('FileGUID', params.Html);
    return (
        apiManager.dxFileApi(`/upload/update_file`, formData, true)
    )
}

export function* dxExperienceUpdateSingleFile(section) {
    try {
        const response = yield call(dxExperienceUpdateSingleFileUrl, section)
        return response;
    } catch (err) {
        return err;
    }
}

export function* dxExperienceUpdateFiles(action) {
    try {

        let experience = action.payload.experience;
        let {
            Type,
            Pages,
        } = experience;

        if (Type == 0) {
            yield put({
                type: EXPERIENCE_UPDATE_FILE__SUCCEEDED,
                payload: {
                    experience: action.payload.experience
                },
            });
        } else {

            for (let i = 0; i < Pages.length; i++) {
                let page = Pages[i];
                if (!page.IsDeleted) {
                    for (let j = 0; j < page.Sections.length; j++) {
                        let section = page.Sections[j];
                        if (!section.IsDeleted && section.Type == 'EDITOR') {
                            if (section.Html) {
                                // Sync server html content
                                if (section.IsSyncServer) {
                                    let response = yield call(dxExperienceUpdateSingleFile, section);
                                    if (response.Confirmation == 'SUCCESS') section.Html = response.Response.File.FileGUID;
                                }
                            } else {
                                let response = yield call(dxExperienceUploadSingleFile, section);
                                if (response.Confirmation == 'SUCCESS') section.Html = response.Response.File.FileGUID;
                            }
                        }
                    }
                }
            }
        }
        yield put({
            type: EXPERIENCE_UPDATE_FILE__SUCCEEDED,
            payload: {
                experience
            },
        });

    } catch (error) {
        yield put({
            type: EXPERIENCE_UPDATE_FILE__FAILED,
            payload: error,
        });
    }
}

export function* dxExperienceUpdateFileSaga() {
    yield takeEvery(EXPERIENCE_UPDATE_FILE_REQUESTED, dxExperienceUpdateFiles);
}

// Experience update request
export const dxExperienceUpdateUrl = (params) => {
    let experience = params.experience;
    let {
        ExperienceGUID,
        UpdateExperienceCardGUID,
        Type,
        ExperienceTitle,
        CardTitle,
        Card,
        Pages,
    } = experience;
    const formattedParams = {
        ExperienceGUID,
        ExperienceType: Type.toString(),
        ExperienceTitle: ExperienceTitle ? ExperienceTitle.trim() : '',
        ExperienceCard: {
            ExperienceCardGUID: UpdateExperienceCardGUID,
            Type: Card.Type,
            Title: CardTitle ? CardTitle.trim() : '',
            Content: Card.Content ? Card.Content.trim() : '',
            Settings: Card.Settings,
        },
        ExperiencePages: __format_experience_params(Pages)
    };
    return (
        apiManager.dxApi(`/experience/update`, formattedParams, true)
    )
}

export function* dxExperienceUpdate(action) {
    try {
        const response = yield call(dxExperienceUpdateUrl, action.payload);
        let { Confirmation, Response, Message } = response;
        if (Confirmation != 'SUCCESS') {
            yield put({
                type: EXPERIENCE_UPDATE__FAILED,
                payload: {
                    message: 'Experience update api error'
                },
            });
        } else {
            yield put({
                type: EXPERIENCE_UPDATE__SUCCEEDED,
                payload: {
                    message: 'Experience has been updated'
                },
            });
        }
    } catch (error) {
        yield put({
            type: EXPERIENCE_UPDATE__FAILED,
            payload: {
                message: 'Experience update api error'
            },
        });
    }
}

export function* dxExperienceUpdateSaga() {
    yield takeEvery(EXPERIENCE_UPDATE_REQUESTED, dxExperienceUpdate);
}