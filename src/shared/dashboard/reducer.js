import {
    HTML_FETCH__SUCCEEDED,
    CHANNEL_FETCH__SUCCEEDED,
    EXPERIENCE_FETCH__SUCCEEDED,
} from './constants';

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
            tmpExperience = __find_experience_by_guid(updated.Experiences, payload.experienceGUID);
            tmpPage = __find_page_by_guid(tmpExperience.experience.ExperiencePages, payload.pageGUID);
            tmpSection = __find_section_by_guid(tmpPage.page.Sections, payload.sectionGUID);
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

const __find_experience_by_guid = (experiences, guid) => {
    for (let i = 0; i < experiences.length; i++) {
        let experience = experiences[i];
        if (experience.ExperienceGUID == guid) {
            return {
                index: i,
                experience,
            };
        }
    }
    return null;
}

const __find_page_by_guid = (pages, guid) => {
    for (let i = 0; i < pages.length; i++) {
        let page = pages[i];
        if (page.PageGUID == guid) {
            return {
                index: i,
                page,
            };
        }
    }
    return null;
}

const __find_section_by_guid = (sections, guid) => {
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        if (section.SectionGUID == guid) {
            return {
                index: i,
                section,
            };
        }
    }
    return null;
}

export default dashboardReducer;
