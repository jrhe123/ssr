import {
    EXPERIENCE_TYPE__SUCCEEDED,
    EXPERIENCE_TYPE_UPDATE__SUCCEEDED,
    EXPERIENCE_INDEX_UPDATE__SUCCEEDED,
    EXPERIENCE_TITLE_UPDATE__SUCCEEDED,

    EXPERIENCE_CARD_TEMPLATE_TOGGLE__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_FETCH__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_SELECT__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_UPDATE_IMAGE__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_UPDATE_COLOR__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_UPDATE_CONTENT__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_SAVE__SUCCEEDED,
    EXPERIENCE_CARD_TEMPLATE_REMOVE__SUCCEEDED,

    EXPERIENCE_PAGE_TEMPLATE_TOGGLE__SUCCEEDED,
    EXPERIENCE_PAGE_TEMPLATE_OPTION_SELECT__SUCCEEDED,
    EXPERIENCE_PAGE_TEMPLATE_FETCH__SUCCEEDED,

    EXPERIENCE_PAGE_CAROUSEL_TOGGLE__SUCCEEDED,
    EXPERIENCE_PAGE_CAROUSEL_ACTIVE__SUCCEEDED,

    EXPERIENCE_PAGE_ADD_PAGE__SUCCEEDED,
    EXPERIENCE_PAGE_ADD_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_SHUFFLE_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_SELECT_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_UPDATE_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_ELEM_CONNECT_PAGE__SUCCEEDED,
} from './constants';

// Libraries
const update = require('immutability-helper');

// helpers
import { search_object_index_by_value } from '../helpers';
import { uuid } from '../helpers/tools';

let templateCard = {
    cardTemplateGUID: null,
    content: null,      // card content
    settings: [],       // card settings
    title: null,        // display card title desc
    type: null          // card type
};
let templateNewPage = {
    pageGUID: null,
    isRoot: false,      // root page
    isSplash: false,    // splash
    title: '',      // page title
    sections: [],   // page sections
    isConnected: false,     // page connected
};
let templateNewSection = {
    sectionGUID: null,
    index: null,    // quill editor tool bar render order
    type: null,     // section type
    isActive: false,    // section active
    htmlContent: '',    // html content
    btnContent: '',     // btn label
    connectedPageGUID: null,     // btn connect page guid
    pdfPath: null,        // pdf file path
    splashContent: ''      // splash content
};
const initialState = {
    cardTemplates: [],      // card templates
    pageTemplates: [],      // page templates
    experience: {
        type: '0',      // with OR without page(s)
        index: '0',     // step

        isCardTemplateMenuOpen: true,   // card template menu
        isCardTemplateSaved: false,     // card saved
        cardTemplate: null,     // card template
        card: null,             // card storage

        isPageTemplateMenuOpen: true,       // page template menu
        activePageTemplateOptionIndex: 0,   // page template menu option 1 OR 2

        isPageCarouselMenuOpen: false,      // page carousel menu

        experienceTitle: null,      // experience title
        cardTitle: 'Card 1',        // experience card title

        pages: [],      // pages
        newPage: Object.assign({}, templateNewPage),        // current working page
        activePageSectionIndex: 0,      // active section on a page
    },
};

const newexperienceReducer = (previousState = initialState, { type, payload }) => {

    let updated = Object.assign({}, previousState);
    let tmpExperience = Object.assign({}, updated.experience);
    let tmpCardTemplate = Object.assign({}, tmpExperience.cardTemplate);
    let tmpPages = Object.assign([], tmpExperience.pages);
    let tmpNewPage = Object.assign({}, tmpExperience.newPage);
    let tmpNewPageSections = Object.assign([], tmpNewPage.sections);

    let tmpSettingIndex;
    let tmpPageGUID;
    let tmpUpdatePage;
    let tmpNewSection;
    let tmpHoverIndex, tmpDragIndex;
    let tmpDragSection, tmpHoverSection;
    let tmpActiveSectionIndex;
    let tmpUpdateSection;

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

            if (payload.experienceIndex == 2
                && !updated.experience.pages.length) {
                tmpNewPage.pageGUID = uuid();
                tmpNewPage.isRoot = true;
                tmpNewPage.title = 'Page 1';
                tmpExperience.newPage = tmpNewPage;
                tmpPages.push(tmpNewPage);
                tmpExperience.pages = tmpPages;
            }
            tmpExperience.index = payload.experienceIndex;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_TITLE_UPDATE__SUCCEEDED:
            if (payload.type == 'EXPERIENCE') {
                tmpExperience.experienceTitle = payload.title;
            } else if (payload.type == 'CARD') {
                tmpExperience.cardTitle = payload.title;
            } else if (payload.type == 'PAGE') {
                // update arr of pages
                tmpPageGUID = updated.experience.newPage.pageGUID;
                tmpUpdatePage = find_page_by_guid(tmpPageGUID, tmpPages);
                tmpUpdatePage.page.title = payload.title;
                tmpPages[tmpUpdatePage.index] = tmpUpdatePage.page;
                tmpExperience.pages = tmpPages;

                // update new page
                tmpNewPage.title = payload.title;
                tmpExperience.newPage = tmpNewPage;
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

        case EXPERIENCE_CARD_TEMPLATE_UPDATE_COLOR__SUCCEEDED:
            tmpSettingIndex = search_object_index_by_value(tmpCardTemplate.Settings, payload.type);
            tmpCardTemplate.Settings[tmpSettingIndex].Default = payload.color;
            tmpExperience.cardTemplate = tmpCardTemplate;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_UPDATE_CONTENT__SUCCEEDED:
            tmpCardTemplate.Content = payload.content;
            tmpExperience.cardTemplate = tmpCardTemplate;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_SAVE__SUCCEEDED:
            tmpExperience.index = 0;
            tmpExperience.isCardTemplateSaved = true;
            tmpExperience.card = Object.assign({}, tmpExperience.cardTemplate);
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_REMOVE__SUCCEEDED:
            tmpExperience.isCardTemplateSaved = false;
            tmpExperience.cardTemplate = null;
            tmpExperience.cardTitle = '';
            tmpExperience.card = null;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_TEMPLATE_TOGGLE__SUCCEEDED:
            tmpExperience.isPageTemplateMenuOpen = payload.toggle;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_TEMPLATE_OPTION_SELECT__SUCCEEDED:
            tmpExperience.activePageTemplateOptionIndex = payload.index;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_TEMPLATE_FETCH__SUCCEEDED:
            updated.pageTemplates = payload.templates;
            return updated;

        case EXPERIENCE_PAGE_CAROUSEL_TOGGLE__SUCCEEDED:
            tmpExperience.isPageCarouselMenuOpen = payload.toggle;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_CAROUSEL_ACTIVE__SUCCEEDED:
            tmpNewPage = find_page_by_guid(payload.pageGUID, tmpPages);
            tmpActiveSectionIndex = find_active_section_index(tmpNewPage.page.sections);

            tmpExperience.newPage = Object.assign({}, tmpNewPage.page);
            tmpExperience.activePageSectionIndex = tmpActiveSectionIndex;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_ADD_PAGE__SUCCEEDED:
            tmpNewPage = Object.assign({}, templateNewPage);
            tmpNewPage.pageGUID = uuid();
            tmpNewPage.title = `Page ${tmpPages.length + 1}`;
            tmpPages.push(tmpNewPage);

            tmpExperience.pages = tmpPages;
            tmpExperience.newPage = tmpNewPage;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_ADD_ELEM__SUCCEEDED:
            tmpUpdatePage = find_page_by_guid(tmpNewPage.pageGUID, tmpPages);
            if (!tmpUpdatePage.page.isSplash
                || payload.type != 'SPLASH'
            ) {     // only one splash per page
                tmpNewSection = Object.assign({}, templateNewSection);
                tmpNewSection.sectionGUID = uuid();
                tmpNewSection.index = Number(tmpPages.length.toString() + tmpNewPageSections.length.toString());
                tmpNewSection.type = payload.type;
                tmpNewSection.isActive = true;

                // update new page
                deactive_other_sections(tmpNewSection.sectionGUID, tmpNewPageSections);
                if (payload.type == 'SPLASH') {   // first elem of arr
                    tmpNewPageSections.unshift(tmpNewSection);
                } else {
                    tmpNewPageSections.push(tmpNewSection);
                }
                tmpActiveSectionIndex = find_active_section_index(tmpNewPageSections);
                tmpNewPage.sections = tmpNewPageSections;
                if (payload.type == 'SPLASH') {
                    tmpNewPage.isSplash = true;
                }

                // update arr of pages
                tmpPages[tmpUpdatePage.index] = Object.assign({}, tmpNewPage);

                tmpExperience.pages = tmpPages;
                tmpExperience.newPage = tmpNewPage;
                tmpExperience.activePageSectionIndex = tmpActiveSectionIndex;
                updated.experience = tmpExperience;
            }
            return updated;

        case EXPERIENCE_PAGE_SHUFFLE_ELEM__SUCCEEDED:
            tmpDragIndex = payload.dragIndex;
            tmpHoverIndex = payload.hoverIndex;

            tmpDragSection = tmpNewPage.sections[tmpDragIndex];
            tmpHoverSection = tmpNewPage.sections[tmpHoverIndex];
            if (tmpDragSection.type != 'SPLASH'
                && tmpHoverSection.type != 'SPLASH') {
                // update new page
                tmpNewPage = update(tmpNewPage, {
                    sections: {
                        $splice: [[tmpDragIndex, 1], [tmpHoverIndex, 0, tmpDragSection]],
                    },
                });
                tmpActiveSectionIndex = find_active_section_index(tmpNewPage.sections);

                // update arr of pages
                tmpUpdatePage = find_page_by_guid(tmpNewPage.pageGUID, tmpPages);
                tmpPages[tmpUpdatePage.index] = Object.assign({}, tmpNewPage);

                tmpExperience.pages = tmpPages;
                tmpExperience.newPage = tmpNewPage;
                tmpExperience.activePageSectionIndex = tmpActiveSectionIndex;
                updated.experience = tmpExperience;
            }
            return updated;

        case EXPERIENCE_PAGE_SELECT_ELEM__SUCCEEDED:
            deactive_other_sections(payload.sectionGUID, tmpNewPageSections);
            tmpActiveSectionIndex = find_active_section_index(tmpNewPageSections);

            tmpNewPage.sections = tmpNewPageSections;
            tmpExperience.newPage = tmpNewPage;
            tmpExperience.activePageSectionIndex = tmpActiveSectionIndex;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_UPDATE_ELEM__SUCCEEDED:
            tmpUpdateSection = find_section_by_guid(tmpNewPage.sections, payload.sectionGUID);
            if (tmpUpdateSection.type == payload.type) {
                switch (payload.type) {
                    case 'EDITOR':
                        tmpUpdateSection.htmlContent = payload.content;
                        break;
                    case 'BUTTON':
                        tmpUpdateSection.btnContent = payload.content;
                        break;
                    case 'EMBED_PDF':
                        tmpUpdateSection.pdfPath = 'http://localhost:2999/sample.pdf';
                        break;
                    case 'SPLASH':
                        tmpUpdateSection.splashContent = payload.content;
                        break;
                    default:
                        break;
                }
                tmpExperience.newPage = tmpNewPage;
                updated.experience = tmpExperience;
            }
            return updated;

        case EXPERIENCE_PAGE_ELEM_CONNECT_PAGE__SUCCEEDED:
            tmpUpdateSection = find_section_by_guid(tmpNewPage.sections, payload.sectionGUID);
            if (payload.pageGUID) {
                tmpUpdatePage = find_page_by_guid(payload.pageGUID, tmpPages);
                if (!tmpUpdatePage.page.isRoot
                    && !tmpUpdatePage.page.isConnected) {
                    // connect section
                    tmpUpdateSection.connectedPageGUID = payload.pageGUID;
                    // connect page
                    tmpUpdatePage.page.isConnected = true;

                    // update arr of pages
                    tmpPages[tmpUpdatePage.index] = Object.assign({}, tmpUpdatePage.page);
                    tmpExperience.pages = tmpPages;
                    tmpExperience.newPage = tmpNewPage;
                    updated.experience = tmpExperience;
                }
            } else {
                // disconnect page
                tmpUpdatePage = find_page_by_guid(tmpUpdateSection.connectedPageGUID, tmpPages);
                tmpUpdatePage.page.isConnected = false;
                // disconnect section
                tmpUpdateSection.connectedPageGUID = null;

                // update arr of pages
                tmpPages[tmpUpdatePage.index] = Object.assign({}, tmpUpdatePage.page);
                tmpExperience.pages = tmpPages;
                tmpExperience.newPage = tmpNewPage;
                updated.experience = tmpExperience;
            }
            return updated;

        default:
            return previousState;
    }
};

const find_page_by_guid = (guid, pages) => {
    for (let i = 0; i < pages.length; i++) {
        if (guid == pages[i].pageGUID) {
            return {
                index: i,
                page: pages[i]
            };
        }
    }
    return {};
}
const deactive_other_sections = (guid, sections) => {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].sectionGUID != guid) {
            sections[i].isActive = false;
        } else {
            sections[i].isActive = true;
        }
    }
}
const find_active_section_index = (sections) => {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].isActive) {
            return i;
        }
    }
    return null;
}
const find_section_by_guid = (sections, targetSectionGUID) => {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].sectionGUID == targetSectionGUID) {
            return sections[i];
        }
    }
    return null;
}

export default newexperienceReducer;
