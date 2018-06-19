import {
    EXPERIENCE_TYPE__SUCCEEDED,
    EXPERIENCE_TYPE_UPDATE__SUCCEEDED,
    EXPERIENCE_INDEX_UPDATE__SUCCEEDED,
    EXPERIENCE_TITLE_UPDATE__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_TOGGLE__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_FETCH__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_SELECT__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_UPDATE_IMAGE__SUCCEEDED,
} from './constants';

const initialState = {
    cardTemplates: [],
    experience: {
        type: '0',
        index: '0',

        isCardTemplateMenuOpen: true,
        cardTemplate: null,

        experienceTitle: null,
        cardTitle: null,
        pageTitle: null
    }
};

const newexperienceReducer = (previousState = initialState, { type, payload }) => {
    
    let updated = Object.assign({}, previousState);
    let tmpExperience = Object.assign({}, updated.experience);
    let tmpCardTemplate = Object.assign({}, tmpExperience.cardTemplate);

    switch (type) {

        case EXPERIENCE_TYPE__SUCCEEDED:
            tmpExperience.type = payload.experienceType;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_TYPE_UPDATE__SUCCEEDED:
            tmpExperience.type = payload.experienceType;
            updated.experience = tmpExperience;
            return updated;
        
        case EXPERIENCE_INDEX_UPDATE__SUCCEEDED:
            tmpExperience.index = payload.experienceIndex;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_TITLE_UPDATE__SUCCEEDED:
            if(payload.type == 'EXPERIENCE'){
                tmpExperience.experienceTitle = payload.title;
            }else if(payload.type == 'CARD'){
                tmpExperience.cardTitle = payload.title;
            }else if(payload.type == 'PAGE'){
                tmpExperience.pageTitle = payload.title;
            }
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_TOGGLE__SUCCEEDED:
            tmpExperience.isCardTemplateMenuOpen = payload.toggle;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_FETCH__SUCCEEDED:
            updated.cardTemplates = payload.templates;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_SELECT__SUCCEEDED:
            tmpCardTemplate = JSON.parse(JSON.stringify(payload.template));
            tmpExperience.cardTemplate = tmpCardTemplate;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_UPDATE_IMAGE__SUCCEEDED:
            tmpCardTemplate.Settings[0].Default = payload.imgFile;
            tmpExperience.cardTemplate = tmpCardTemplate;
            updated.experience = tmpExperience;
            return updated;

        default:
            return previousState;
    }
};

export default newexperienceReducer;
