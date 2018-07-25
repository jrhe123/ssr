import {
    EXPERIENCE_CREATE__SUCCEEDED,
    EXPERIENCE_UPLOAD_FILE__SUCCEEDED,
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

    EXPERIENCE_PAGE_PAGES_SAVE__SUCCEEDED,
    EXPERIENCE_PAGE_PAGES_REMOVE__SUCCEEDED,
    EXPERIENCE_PAGE_TEMPLATE_TOGGLE__SUCCEEDED,
    EXPERIENCE_PAGE_TEMPLATE_OPTION_SELECT__SUCCEEDED,
    EXPERIENCE_PAGE_TEMPLATE_FETCH__SUCCEEDED,

    EXPERIENCE_PAGE_CAROUSEL_TOGGLE__SUCCEEDED,
    EXPERIENCE_PAGE_CAROUSEL_ACTIVE__SUCCEEDED,

    EXPERIENCE_PAGE_ADD_PAGE__SUCCEEDED,
    EXPERIENCE_PAGE_DELETE_PAGE__SUCCEEDED,
    EXPERIENCE_PAGE_ADD_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_DELETE_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_COPY_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_SHUFFLE_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_SELECT_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_UPDATE_ELEM__SUCCEEDED,
    EXPERIENCE_PAGE_ELEM_CONNECT_PAGE__SUCCEEDED,
} from './constants';

// Function
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

// Libraries
const update = require('immutability-helper');

// helpers
import { search_object_index_by_value } from '../helpers';
import { uuid } from '../helpers/tools';

let templateCard = {
    cardGUID: null,
    content: null,      // card content
    settings: [],       // card settings
    title: null,        // display card title desc
    type: null          // card type
};
let templateNewPage = {
    pageGUID: null,
    parentPageGUID: null,
    isRoot: false,      // root page
    isSplash: false,    // splash
    title: '',      // page title
    sections: [],   // page sections
    isConnected: false,     // page connected
    isDeleted: false,       // page deleted
};
let templateNewSection = {
    sectionGUID: null,
    index: null,    // quill editor tool bar render order
    type: null,     // section type
    isActive: false,    // section active
    htmlContent: '',    // html content
    btnContent: '',     // btn label
    connectedPageGUID: null,     // btn connect page guid
    pdf: null,        // pdf file path
    splashContent: 'Splash image with page title',      // splash content
    splashImg: null,        // splash img
    splashColor: '#ffffff',  // splash color
    videoInput: null,    // video input
    videoUrl: null,      // video url
    img: null,        // img
    isDeleted: false,       // section deleted
    pageGUID: null
};
const initialState = {
    isCompleted: false,     // complete experience
    isFilesUploaded: false, // upload html files
    index: 0,               // section index
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
        isPagesSaved: false,                // page saved
        activePageTemplateOptionIndex: 0,   // page template menu option 1 OR 2

        isPageCarouselMenuOpen: false,      // page carousel menu

        experienceTitle: 'New Experience',      // experience title
        cardTitle: 'Card 1',        // experience card title

        tools: [],      // toolbars
        pages: [],      // pages
        newPage: Object.assign({}, templateNewPage),        // current working page
        activePageSectionIndex: 0,      // active section on a page
    },
};

const newexperienceReducer = (previousState = initialState, { type, payload }) => {

    let updated = Object.assign({}, previousState);
    let tmpIndex = updated.index;
    let tmpExperience = Object.assign({}, updated.experience);
    let tmpCardTemplate = Object.assign({}, tmpExperience.cardTemplate);
    let tmpTools = Object.assign([], tmpExperience.tools);
    let tmpPages = Object.assign([], tmpExperience.pages);
    let tmpNewPage = Object.assign({}, tmpExperience.newPage);
    let tmpNewPageSections = Object.assign([], tmpNewPage.sections);

    let tmpIsRootPage;
    let tmpConnectedPageGUID;
    let tmpConnectedPage;
    let tmpSettingIndex;
    let tmpPageGUID;
    let tmpPagesLength;
    let tmpSections;
    let tmpUpdatePage;
    let tmpNewSection;
    let tmpCopySection;
    let tmpHoverIndex, tmpDragIndex;
    let tmpDragSection, tmpHoverSection;
    let tmpActiveSectionIndex;
    let tmpSectionIndex;
    let tmpUpdateSection;

    switch (type) {

        case EXPERIENCE_CREATE__SUCCEEDED:

            // tmpExperience = {
            //     type: '0',
            //     index: '0',

            //     isCardTemplateMenuOpen: true, 
            //     isCardTemplateSaved: false, 
            //     cardTemplate: null, 
            //     card: null, 

            //     isPageTemplateMenuOpen: true, 
            //     isPagesSaved: false,        
            //     activePageTemplateOptionIndex: 0, 

            //     isPageCarouselMenuOpen: false,   

            //     experienceTitle: 'New Experience',
            //     cardTitle: 'Card 1',  

            //     tools: [],  
            //     pages: [],  
            //     newPage: Object.assign({}, templateNewPage),   
            //     activePageSectionIndex: 0,  
            // }

            updated.isCompleted = true;
            
            // updated.isFilesUploaded = false;
            // updated.index = 0;
            // updated.cardTemplates = [];
            // updated.pageTemplates = [];
            return updated;

        case EXPERIENCE_UPLOAD_FILE__SUCCEEDED:
            updated.isFilesUploaded = true;
            updated.experience = payload.experience;
            return updated;

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
            tmpCardTemplate = Object.assign({}, templateCard);
            tmpCardTemplate.cardGUID = uuid();
            tmpCardTemplate.content = payload.template.Content;
            tmpCardTemplate.settings = JSON.parse(JSON.stringify(payload.template.Settings));
            tmpCardTemplate.title = payload.template.Title;
            tmpCardTemplate.type = payload.template.Type;
            tmpExperience.cardTemplate = tmpCardTemplate;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_UPDATE_IMAGE__SUCCEEDED:
            tmpCardTemplate.settings[0].Default = payload.imgFile;
            tmpExperience.cardTemplate = tmpCardTemplate;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_UPDATE_COLOR__SUCCEEDED:
            tmpSettingIndex = search_object_index_by_value(tmpCardTemplate.settings, payload.type);
            tmpCardTemplate.settings[tmpSettingIndex].Default = payload.color;
            tmpExperience.cardTemplate = tmpCardTemplate;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_UPDATE_CONTENT__SUCCEEDED:
            tmpCardTemplate.content = payload.content;
            tmpExperience.cardTemplate = tmpCardTemplate;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_SAVE__SUCCEEDED:
            tmpExperience.index = 0;
            tmpExperience.isCardTemplateSaved = true;
            tmpExperience.card = Object.assign({}, tmpCardTemplate);
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_REMOVE__SUCCEEDED:
            tmpExperience.isCardTemplateSaved = false;
            tmpExperience.cardTemplate = null;
            tmpExperience.cardTitle = '';
            tmpExperience.card = null;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_PAGES_SAVE__SUCCEEDED:
            tmpExperience.index = 0;
            tmpExperience.isPagesSaved = true;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_PAGES_REMOVE__SUCCEEDED:
            tmpExperience.isPageTemplateMenuOpen = true;
            tmpExperience.isPagesSaved = false;
            tmpExperience.activePageTemplateOptionIndex = 0;
            tmpExperience.isPageCarouselMenuOpen = false;
            tmpExperience.tools = [];
            tmpExperience.pages = [];
            tmpExperience.newPage = Object.assign({}, templateNewPage);
            tmpExperience.activePageSectionIndex = 0;
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
            tmpNewPage.title = `Page ${find_number_of_display_page(tmpPages) + 1}`;
            tmpPages.push(tmpNewPage);

            tmpExperience.pages = tmpPages;
            tmpExperience.newPage = tmpNewPage;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_DELETE_PAGE__SUCCEEDED:
            tmpNewPage = find_page_by_guid(payload.pageGUID, tmpPages);
            tmpPages[tmpNewPage.index].isDeleted = true;
            tmpSections = tmpPages[tmpNewPage.index].sections;
            disconnect_pages_by_sections(tmpSections, tmpPages);

            tmpPagesLength = find_number_of_display_page(tmpPages);
            tmpIsRootPage = tmpPages[tmpNewPage.index].isRoot;

            if (!tmpPagesLength) {   // check number of pages which existed and not deleted
                tmpNewPage = Object.assign({}, templateNewPage);
                tmpNewPage.isRoot = true;
                tmpNewPage.pageGUID = uuid();
                tmpNewPage.title = `Page ${tmpPagesLength + 1}`;
                tmpPages.push(tmpNewPage);
                tmpExperience.newPage = tmpNewPage;
            } else {
                tmpPageGUID = find_previous_display_page_guid(tmpPages);
                tmpNewPage = find_page_by_guid(tmpPageGUID, tmpPages);
                // delete root page
                if (tmpIsRootPage) {
                    tmpNewPage.page.isRoot = true;
                    tmpNewPage.page.parentPageGUID = null;
                }
                tmpActiveSectionIndex = find_active_section_index(tmpNewPage.page.sections);
                tmpExperience.activePageSectionIndex = tmpActiveSectionIndex;
                tmpExperience.newPage = tmpNewPage.page;
            }

            // update tools
            deactive_tools_by_page_guid(payload.pageGUID, tmpTools);
            tmpExperience.tools = tmpTools;
            tmpExperience.pages = tmpPages;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_ADD_ELEM__SUCCEEDED:
            tmpUpdatePage = find_page_by_guid(tmpNewPage.pageGUID, tmpPages);
            if (!tmpUpdatePage.page.isSplash
                || payload.type != 'SPLASH'
            ) {     // only one splash per page
                tmpNewSection = Object.assign({}, templateNewSection);
                tmpNewSection.sectionGUID = uuid();
                tmpNewSection.pageGUID = tmpNewPage.pageGUID;
                tmpNewSection.index = Number(tmpIndex);
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

                // add to tools
                tmpTools.push(tmpNewSection);

                tmpExperience.tools = tmpTools;
                tmpExperience.pages = tmpPages;
                tmpExperience.newPage = tmpNewPage;
                tmpExperience.activePageSectionIndex = tmpActiveSectionIndex;
                updated.experience = tmpExperience;
                updated.index = tmpIndex + 1;
            }
            return updated;

        case EXPERIENCE_PAGE_DELETE_ELEM__SUCCEEDED:
            tmpUpdatePage = find_page_by_guid(tmpNewPage.pageGUID, tmpPages);
            tmpSectionIndex = find_section_index_by_guid(tmpNewPage.sections, payload.sectionGUID);

            // update new page
            tmpNewPageSections[tmpSectionIndex].isDeleted = true;
            // case: BUTTON
            if (tmpNewPageSections[tmpSectionIndex].type == 'BUTTON'
                && tmpNewPageSections[tmpSectionIndex].connectedPageGUID != null) {
                tmpConnectedPage = find_page_by_guid(tmpNewPageSections[tmpSectionIndex].connectedPageGUID, tmpPages);
                tmpConnectedPage.page.isConnected = false;
                tmpPages[tmpConnectedPage.index] = Object.assign({}, tmpConnectedPage.page);
            }
            // case: SPLASH
            if (tmpNewPageSections[tmpSectionIndex].type == 'SPLASH') {
                tmpNewPage.isSplash = false;
            }
            tmpNewPage.sections = tmpNewPageSections;
            // update arr of pages
            tmpPages[tmpUpdatePage.index] = Object.assign({}, tmpNewPage);

            // update tools
            deactive_tools_by_section_guid(payload.sectionGUID, tmpTools);

            tmpExperience.tools = tmpTools;
            tmpExperience.pages = tmpPages;
            tmpExperience.newPage = tmpNewPage;
            updated.experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_COPY_ELEM__SUCCEEDED:
            tmpUpdatePage = find_page_by_guid(tmpNewPage.pageGUID, tmpPages);
            tmpSectionIndex = find_section_index_by_guid(tmpNewPage.sections, payload.sectionGUID);
            tmpCopySection = tmpUpdatePage.page.sections[tmpSectionIndex];

            if (tmpCopySection.type != 'SPLASH'
            ) {     // only one splash per page
                tmpNewSection = Object.assign({}, tmpCopySection);
                tmpNewSection.sectionGUID = uuid();
                tmpNewSection.index = Number(tmpIndex);
                tmpNewSection.connectedPageGUID = null;
                tmpNewSection.isActive = true;

                // update new page
                deactive_other_sections(tmpNewSection.sectionGUID, tmpNewPageSections);
                tmpNewPageSections.insert(tmpSectionIndex + 1, tmpNewSection);  // insert after clone target
                tmpActiveSectionIndex = find_active_section_index(tmpNewPageSections);
                tmpNewPage.sections = tmpNewPageSections;

                // update arr of pages
                tmpPages[tmpUpdatePage.index] = Object.assign({}, tmpNewPage);

                // add to tools
                tmpTools.push(tmpNewSection);

                tmpExperience.tools = tmpTools;
                tmpExperience.pages = tmpPages;
                tmpExperience.newPage = tmpNewPage;
                tmpExperience.activePageSectionIndex = tmpActiveSectionIndex;
                updated.experience = tmpExperience;
                updated.index = tmpIndex + 1;
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
            if (tmpUpdateSection.type == payload.type
                || ['SPLASH_CONTENT', 'SPLASH_IMG', 'SPLASH_COLOR', 'VIDEO_URL', 'VIDEO_CONFIRM'].indexOf(payload.type) != -1) {
                switch (payload.type) {
                    case 'EDITOR':
                        tmpUpdateSection.htmlContent = payload.content;
                        break;
                    case 'BUTTON':
                        tmpUpdateSection.btnContent = payload.content;
                        break;
                    case 'EMBED_PDF':
                        tmpUpdateSection.pdf = payload.content;
                        break;
                    case 'SPLASH_CONTENT':
                        tmpUpdateSection.splashContent = payload.content;
                        break;
                    case 'SPLASH_IMG':
                        tmpUpdateSection.splashImg = payload.content;
                        break;
                    case 'SPLASH_COLOR':
                        tmpUpdateSection.splashColor = payload.content;
                        break;
                    case 'VIDEO_URL':
                        tmpUpdateSection.videoInput = payload.content;
                        break;
                    case 'VIDEO_CONFIRM':
                        tmpUpdateSection.videoUrl = tmpUpdateSection.videoInput;
                        break;
                    case 'IMAGE':
                        tmpUpdateSection.img = payload.content;
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
            tmpConnectedPageGUID = tmpUpdateSection.connectedPageGUID;
            if (payload.pageGUID) {
                tmpUpdatePage = find_page_by_guid(payload.pageGUID, tmpPages);
                if (!tmpUpdatePage.page.isRoot
                    && !tmpUpdatePage.page.isConnected) {
                    // connect section
                    tmpUpdateSection.connectedPageGUID = payload.pageGUID;
                    // connect page
                    tmpUpdatePage.page.parentPageGUID = tmpUpdateSection.pageGUID;
                    tmpUpdatePage.page.isConnected = true;

                    // disconnect page
                    if (tmpConnectedPageGUID) {
                        tmpConnectedPage = find_page_by_guid(tmpConnectedPageGUID, tmpPages);
                        tmpConnectedPage.page.isConnected = false;
                        tmpPages[tmpConnectedPage.index] = Object.assign({}, tmpConnectedPage.page);
                    }

                    // update arr of pages
                    tmpPages[tmpUpdatePage.index] = Object.assign({}, tmpUpdatePage.page);
                    tmpExperience.pages = tmpPages;
                    tmpExperience.newPage = tmpNewPage;
                    updated.experience = tmpExperience;
                }
            } else {
                // disconnect page
                tmpUpdatePage = find_page_by_guid(tmpUpdateSection.connectedPageGUID, tmpPages);
                tmpUpdatePage.page.parentPageGUID = null;
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
const find_section_index_by_guid = (sections, targetSectionGUID) => {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].sectionGUID == targetSectionGUID) {
            return i;
        }
    }
    return null;
}
const deactive_tools_by_section_guid = (guid, sections) => {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].sectionGUID == guid) {
            sections[i].isActive = false;
        }
    }
}
const deactive_tools_by_page_guid = (guid, sections) => {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].pageGUID == guid) {
            sections[i].isActive = false;
        }
    }
}
const find_number_of_display_page = (pages) => {
    let count = 0;
    for (let i = 0; i < pages.length; i++) {
        if (!pages[i].isDeleted) {
            count++;
        }
    }
    return count;
}
const find_previous_display_page_guid = (pages) => {
    for (let i = 0; i < pages.length; i++) {
        if (!pages[i].isDeleted) {
            return pages[i].pageGUID;
        }
    }
}
const disconnect_pages_by_sections = (sections, pages) => {
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        if (section.type == 'BUTTON'
            && section.connectedPageGUID) {
            let item = find_page_by_guid(section.connectedPageGUID, pages);
            item.page.isConnected = false;
            pages[item.index] = item.page;
        }
    }
}

export default newexperienceReducer;
