import {
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

    EXPERIENCE_PAGE_TEMPLATE_TOGGLE_REQUESTED,
    EXPERIENCE_PAGE_TEMPLATE_FETCH_REQUESTED,
    EXPERIENCE_PAGE_TEMPLATE_OPTION_SELECT_REQUESTED,

} from './constants';

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