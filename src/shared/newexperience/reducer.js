import {
    EXPERIENCE_TYPE__SUCCEEDED,
    EXPERIENCE_TYPE_UPDATE__SUCCEEDED,
    EXPERIENCE_INDEX_UPDATE__SUCCEEDED,
    EXPERIENCE_TITLE_UPDATE__SUCCEEDED,
} from './constants';

const initialState = {
    experience: {
        type: '0',
        index: '0',

        cardTemplateGUID: null,

        experienceTitle: null,
        cardTitle: null,
        pageTitle: null
    }
};

const newexperienceReducer = (previousState = initialState, { type, payload }) => {
    
    let updated = Object.assign({}, previousState);
    let tmpExperience = Object.assign({}, updated.experience);

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

        default:
            return previousState;
    }
};

export default newexperienceReducer;
