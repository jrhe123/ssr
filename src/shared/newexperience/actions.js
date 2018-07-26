import {
    EXPERIENCE_INITIAL_REQUESTED,
    EXPERIENCE_CREATE_REQUESTED,
    EXPERIENCE_UPLOAD_FILE_REQUESTED,
    EXPERIENCE_TYPE_REQUESTED,
    EXPERIENCE_TYPE_UPDATE_REQUESTED,
    EXPERIENCE_INDEX_UPDATE_REQUESTED,
    EXPERIENCE_TITLE_UPDATE_REQUESTED,

    EXPERIENCE_CARD_TEMPLATE_TOGGLE_REQUESTED,
    EXPERIENCE_CARD_TEMPLATE_FETCH_REQUESTED,
    EXPERIENCE_CARD_TEMPLATE_SELECT_REQUESTED,
    EXPERIENCE_CARD_TEMPLATE_UPDATE_IMAGE_REQUESTED,
    EXPERIENCE_CARD_TEMPLATE_UPDATE_COLOR_REQUESTED,
    EXPERIENCE_CARD_TEMPLATE_UPDATE_CONTENT_REQUESTED,
    EXPERIENCE_CARD_TEMPLATE_SAVE_REQUESTED,
    EXPERIENCE_CARD_TEMPLATE_REMOVE_REQUESTED,

    EXPERIENCE_PAGE_PAGES_SAVE_REQUESTED,
    EXPERIENCE_PAGE_PAGES_REMOVE_REQUESTED,
    EXPERIENCE_PAGE_TEMPLATE_TOGGLE_REQUESTED,
    EXPERIENCE_PAGE_TEMPLATE_FETCH_REQUESTED,
    EXPERIENCE_PAGE_TEMPLATE_OPTION_SELECT_REQUESTED,

    EXPERIENCE_PAGE_CAROUSEL_TOGGLE_REQUESTED,
    EXPERIENCE_PAGE_CAROUSEL_ACTIVE_REQUESTED,

    EXPERIENCE_PAGE_ADD_PAGE_REQUESTED,
    EXPERIENCE_PAGE_DELETE_PAGE_REQUESTED,
    EXPERIENCE_PAGE_ADD_ELEM_REQUESTED,
    EXPERIENCE_PAGE_DELETE_ELEM_REQUESTED,
    EXPERIENCE_PAGE_COPY_ELEM_REQUESTED,
    EXPERIENCE_PAGE_SHUFFLE_ELEM_REQUESTED,
    EXPERIENCE_PAGE_SELECT_ELEM_REQUESTED,
    EXPERIENCE_PAGE_UPDATE_ELEM_REQUESTED,
    EXPERIENCE_PAGE_ELEM_CONNECT_PAGE_REQUESTED,
} from './constants';

export const dxExperienceInitial = () => {
    return {
        type: EXPERIENCE_INITIAL_REQUESTED,
        payload: {},
    }
}

export const dxExperienceCreate = (experience) => {
    return {
        type: EXPERIENCE_CREATE_REQUESTED,
        payload: {
            experience
        },
    }
}

export const dxExperienceUploadFile = (experience) => {
    return {
        type: EXPERIENCE_UPLOAD_FILE_REQUESTED,
        payload: {
            experience
        },
    }
}

export const dxExperienceType = (experienceType) => {
    return {
        type: EXPERIENCE_TYPE_REQUESTED,
        payload: {
            experienceType
        },
    }
}

export const dxExperienceTypeUpdate = (experienceType) => {
    return {
        type: EXPERIENCE_TYPE_UPDATE_REQUESTED,
        payload: {
            experienceType
        },
    }
}

export const dxExperienceIndexUpdate = (experienceIndex) => {
    return {
        type: EXPERIENCE_INDEX_UPDATE_REQUESTED,
        payload: {
            experienceIndex
        },
    }
}

export const dxExperienceTitleUpdate = (type, title) => {
    return {
        type: EXPERIENCE_TITLE_UPDATE_REQUESTED,
        payload: {
            type,
            title,
        },
    }
}

export const dxExperienceCardTemplateMenuUpdate = (toggle) => {
    return {
        type: EXPERIENCE_CARD_TEMPLATE_TOGGLE_REQUESTED,
        payload: {
            toggle,
        },
    }
}

export const dxExperienceCardTemplateFetch = (templates) => {
    return {
        type: EXPERIENCE_CARD_TEMPLATE_FETCH_REQUESTED,
        payload: {
            templates,
        },
    }
}

export const dxExperienceCardTemplateSelect = (template) => {
    return {
        type: EXPERIENCE_CARD_TEMPLATE_SELECT_REQUESTED,
        payload: {
            template,
        },
    }
}

export const dxExperienceCardTemplateUpdateImage = (imgFile) => {
    return {
        type: EXPERIENCE_CARD_TEMPLATE_UPDATE_IMAGE_REQUESTED,
        payload: {
            imgFile,
        },
    }
}

export const dxExperienceCardTemplateUpdateColor = (color, type) => {
    return {
        type: EXPERIENCE_CARD_TEMPLATE_UPDATE_COLOR_REQUESTED,
        payload: {
            color,
            type,
        },
    }
}

export const dxExperienceCardTemplateUpdateContent = (content) => {
    return {
        type: EXPERIENCE_CARD_TEMPLATE_UPDATE_CONTENT_REQUESTED,
        payload: {
            content
        },
    }
}

export const dxExperienceCardTemplateSave = () => {
    return {
        type: EXPERIENCE_CARD_TEMPLATE_SAVE_REQUESTED,
        payload: {},
    }
}

export const dxExperienceCardTemplateRemove = () => {
    return {
        type: EXPERIENCE_CARD_TEMPLATE_REMOVE_REQUESTED,
        payload: {},
    }
}

export const dxExperiencePagePagesSave = () => {
    return {
        type: EXPERIENCE_PAGE_PAGES_SAVE_REQUESTED,
        payload: {},
    }
}

export const dxExperiencePagePagesRemove = () => {
    return {
        type: EXPERIENCE_PAGE_PAGES_REMOVE_REQUESTED,
        payload: {},
    }
}

export const dxExperiencePageTemplateMenuUpdate = (toggle) => {
    return {
        type: EXPERIENCE_PAGE_TEMPLATE_TOGGLE_REQUESTED,
        payload: {
            toggle,
        },
    }
}

export const dxExperiencePageTemplateFetch = (templates) => {
    return {
        type: EXPERIENCE_PAGE_TEMPLATE_FETCH_REQUESTED,
        payload: {
            templates,
        },
    }
}

export const dxExperiencePageTemplateOptionSelect = (index) => {
    return {
        type: EXPERIENCE_PAGE_TEMPLATE_OPTION_SELECT_REQUESTED,
        payload: {
            index,
        },
    }
}

export const dxExperiencePageCarouselMenuUpdate = (toggle) => {
    return {
        type: EXPERIENCE_PAGE_CAROUSEL_TOGGLE_REQUESTED,
        payload: {
            toggle,
        },
    }
}

export const dxExperiencePageCarouselActivePage = (pageGUID) => {
    return {
        type: EXPERIENCE_PAGE_CAROUSEL_ACTIVE_REQUESTED,
        payload: {
            pageGUID,
        },
    }
}

export const dxExperiencePageAddPage = () => {
    return {
        type: EXPERIENCE_PAGE_ADD_PAGE_REQUESTED,
        payload: {},
    }
}

export const dxExperiencePageDeletePage = (pageGUID) => {
    return {
        type: EXPERIENCE_PAGE_DELETE_PAGE_REQUESTED,
        payload: {
            pageGUID
        },
    }
}

export const dxExperiencePageAddElem = (type) => {
    return {
        type: EXPERIENCE_PAGE_ADD_ELEM_REQUESTED,
        payload: {
            type,
        },
    }
}

export const dxExperiencePageDeleteElem = (sectionGUID) => {
    return {
        type: EXPERIENCE_PAGE_DELETE_ELEM_REQUESTED,
        payload: {
            sectionGUID,
        },
    }
}

export const dxExperiencePageCopyElem = (sectionGUID) => {
    return {
        type: EXPERIENCE_PAGE_COPY_ELEM_REQUESTED,
        payload: {
            sectionGUID,
        },
    }
}

export const dxExperiencePageShuffleElem = (dragIndex, hoverIndex) => {
    return {
        type: EXPERIENCE_PAGE_SHUFFLE_ELEM_REQUESTED,
        payload: {
            dragIndex,
            hoverIndex,
        },
    }
}

export const dxExperiencePageSelectElem = (sectionGUID) => {
    return {
        type: EXPERIENCE_PAGE_SELECT_ELEM_REQUESTED,
        payload: {
            sectionGUID
        },
    }
}

export const dxExperiencePageUpdateElem = (sectionGUID, type, content) => {
    return {
        type: EXPERIENCE_PAGE_UPDATE_ELEM_REQUESTED,
        payload: {
            sectionGUID,
            type,
            content,
        },
    }
}

export const dxExperiencePageSectionConnectPage = (sectionGUID, pageGUID) => {
    return {
        type: EXPERIENCE_PAGE_ELEM_CONNECT_PAGE_REQUESTED,
        payload: {
            sectionGUID,
            pageGUID,
        },
    }
}