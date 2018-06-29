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
    EXPERIENCE_PAGE_ADD_PAGE__SUCCEEDED,
    EXPERIENCE_PAGE_ADD_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_SHUFFLE_ELEM__SUCCEEDED,
} from './constants';

// Libraries
const update = require('immutability-helper');

// helpers
import { search_object_index_by_value } from '../helpers';
import { uuid } from '../helpers/tools';


let templateNewPage = {
    pageGUID: null,
    isSplash: false,
    title: '',
    sections: [],
    isSaved: false
};
let templateNewSection = {
    sectionGUID: null,
    type: null,
    isActive: false
};
const initialState = {
    cardTemplates: [],
    pageTemplates: [],
    experience: {
        type: '0',
        index: '0',

        isCardTemplateMenuOpen: true,
        isCardTemplateSaved: false,
        cardTemplate: null,

        isPageTemplateMenuOpen: true,
        activePageTemplateOptionIndex: 0,

        isPageCarouselMenuOpen: false,

        experienceTitle: null,
        cardTitle: 'Card 1',

        pages: [],
        newPage: templateNewPage,
    },
};

const newexperienceReducer = (previousState = initialState, { type, payload }) => {

    let updated = Object.assign({}, previousState);
    let tmpExperience = Object.assign({}, updated.experience);
    let tmpCardTemplate = Object.assign({}, tmpExperience.cardTemplate);
    let tmpPages = Object.assign([], tmpExperience.pages);
    let tmpNewPage = Object.assign({}, tmpExperience.newPage);

    let tmpSettingIndex;
    let tmpPageGUID;
    let tmpUpdatePage;
    let tmpNewSection;
    let tmpHoverIndex, tmpDragIndex;
    let tmpDragSection;

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
                tmpNewPage.title = 'Page 1';
                tmpNewPage.isSaved = true;
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
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_REMOVE__SUCCEEDED:
            tmpExperience.isCardTemplateSaved = false;
            tmpExperience.cardTemplate = null;
            tmpExperience.cardTitle = '';
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

        case EXPERIENCE_PAGE_ADD_PAGE__SUCCEEDED:
            tmpNewPage = Object.assign({}, templateNewPage);
            tmpNewPage.pageGUID = uuid();
            tmpNewPage.title = `Page ${tmpPages.length + 1}`;
            tmpNewPage.isSaved = true;
            tmpPages.push(tmpNewPage);

            tmpExperience.pages = tmpPages;
            tmpExperience.newPage = tmpNewPage;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_ADD_ELEM__SUCCEEDED:
            tmpNewSection = Object.assign({}, templateNewSection);
            tmpNewSection.sectionGUID = uuid();
            tmpNewSection.type = payload.type;

            tmpNewPage.sections.push(tmpNewSection);
            tmpExperience.newPage = tmpNewPage;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_SHUFFLE_ELEM__SUCCEEDED:
            tmpHoverIndex = payload.hoverIndex;
            tmpDragIndex = payload.dragIndex;

            tmpDragSection = tmpNewPage.sections[tmpDragIndex];
            tmpNewPage = update(tmpNewPage, {
                sections: {
                    $splice: [[tmpDragIndex, 1], [tmpHoverIndex, 0, tmpDragSection]],
                },
            });
            tmpExperience.newPage = tmpNewPage;
            updated.experience = tmpExperience;
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

export default newexperienceReducer;
