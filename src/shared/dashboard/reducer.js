import {
    HTML_FETCH__SUCCEEDED,
    CHANNEL_FETCH__SUCCEEDED,
    EXPERIENCE_FETCH__SUCCEEDED,
} from './constants';

// helpers
import { 
    find_experience_obj_by_guid,
    find_page_obj_by_guid,
    find_section_obj_by_guid,
} from '../helpers';

const initialState = {
    TotalExperienceRecord: 0,
    Experiences: [],

    Channels: []
};

const dashboardReducer = (previousState = initialState, { type, payload }) => {

    let updated = Object.assign({}, previousState);
    let tmpExperiences = Object.assign([], updated.Experiences);

    let tmpExperience;
    let tmpPage;
    let tmpSection;

    switch (type) {

        case HTML_FETCH__SUCCEEDED:
            tmpExperience = find_experience_obj_by_guid(updated.Experiences, payload.experienceGUID);
            tmpPage = find_page_obj_by_guid(tmpExperience.experience.ExperiencePages, payload.pageGUID);
            tmpSection = find_section_obj_by_guid(tmpPage.page.Sections, payload.sectionGUID);
            tmpPage.page.Sections[tmpSection.index].HtmlContent = payload.html;
            tmpExperiences[tmpExperience.index] = tmpExperience.experience;
            updated.Experiences = tmpExperiences;
            return updated;

        case CHANNEL_FETCH__SUCCEEDED:
            updated.Channels = payload.channels;
            return updated;

        case EXPERIENCE_FETCH__SUCCEEDED:
            updated.TotalExperienceRecord = payload.totalRecord;
            updated.Experiences = payload.experiences;
            return updated;

        default:
            return previousState;
    }
};

export default dashboardReducer;
