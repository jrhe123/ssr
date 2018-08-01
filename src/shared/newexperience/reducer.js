import {
    // CREATE EXPERIENCE
    EXPERIENCE_INITIAL__SUCCEEDED,
    EXPERIENCE_CREATE__SUCCEEDED,
    EXPERIENCE_UPLOAD_FILE__SUCCEEDED,
    EXPERIENCE_UPLOAD_GOOGLE_FILE__SUCCEEDED,
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
    EXPERIENCE_PAGE_DOC_PANEL_TOGGLE__SUCCEEDED,
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

    // UPDATE EXPERIENCE
    EXPERIENCE_VIEW__SUCCEEDED,
    EXPERIENCE_VIEW_HTML_FETCH__SUCCEEDED,
    EXPERIENCE_UPDATE_FILE__SUCCEEDED,
    EXPERIENCE_UPDATE__SUCCEEDED,

} from './constants';

// Function
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

// Libraries
const update = require('immutability-helper');

// helpers
import {
    search_object_index_by_value,
} from '../helpers';
import { uuid } from '../helpers/tools';

let templateCard = {
    CardGUID: null,
    Content: null,      // card content
    Settings: [],       // card settings
    Title: null,        // display card title desc
    Type: null          // card type
};
let templateNewPage = {
    PageGUID: null,
    ParentPageGUID: null,
    IsRoot: false,      // root page
    IsSplash: false,    // splash
    Title: '',      // page title
    Sections: [],   // page sections
    IsConnected: false,     // page connected
    IsDeleted: false,       // page deleted
};
let templateNewSection = {
    SectionGUID: null,
    Index: null,    // quill editor tool bar render order
    Type: null,     // section type
    IsActive: false,    // section active
    HtmlContent: '',    // html content
    BtnContent: '',     // btn label
    ConnectedPageGUID: null,     // btn connect page guid
    Pdf: null,        // pdf file path
    SplashContent: 'Splash image with page title',      // splash content
    SplashImg: null,        // splash img
    SplashColor: '#ffffff',  // splash color
    VideoInput: null,    // video input
    VideoUrl: null,      // video url
    Img: null,        // img
    IsDeleted: false,       // section deleted
    PageGUID: null
};
const initialState = {
    IsCompleted: false,     // complete experience
    IsFilesUploaded: false, // upload html files
    IsFilesUpdated: false,  // update html files
    Index: 0,               // section index
    CardTemplates: [],      // card templates
    PageTemplates: [],      // page templates
    GoogleDocuments: [],    // google document arr
    Experience: {
        ExperienceGUID: null,
        UpdateExperienceCardGUID: null,
        Type: '0',      // with OR without page(s)
        Index: '0',     // step

        IsCardTemplateMenuOpen: true,   // card template menu
        IsCardTemplateSaved: false,     // card saved
        CardTemplate: null,     // card template
        Card: null,             // card storage

        IsPageTemplateMenuOpen: true,       // page template menu
        IsPagesSaved: false,                // page saved
        ActivePageTemplateOptionIndex: 0,   // page template menu option 0 OR 1

        IsPageCarouselMenuOpen: false,      // page carousel menu

        ExperienceTitle: 'New Experience',      // experience title
        CardTitle: 'Card 1',        // experience card title

        Tools: [],      // toolbars
        Pages: [],      // pages
        NewPage: Object.assign({}, templateNewPage),        // current working page
        ActivePageSectionIndex: 0,      // active section on a page
    },
};

const newexperienceReducer = (previousState = initialState, { type, payload }) => {

    let updated = Object.assign({}, previousState);
    let tmpIndex = updated.Index;
    let tmpGoogleDocuments = Object.assign([], updated.GoogleDocuments);
    let tmpExperience = Object.assign({}, updated.Experience);
    let tmpCardTemplate = Object.assign({}, tmpExperience.CardTemplate);
    let tmpTools = Object.assign([], tmpExperience.Tools);
    let tmpPages = Object.assign([], tmpExperience.Pages);
    let tmpNewPage = Object.assign({}, tmpExperience.NewPage);
    let tmpNewPageSections = Object.assign([], tmpNewPage.Sections);

    let tmpDoc;
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

        // CREATE EXPERIENCE
        case EXPERIENCE_INITIAL__SUCCEEDED:
            tmpExperience = {
                Type: '0',
                Index: '0',
                IsCardTemplateMenuOpen: true,
                IsCardTemplateSaved: false,
                CardTemplate: null,
                Card: null,
                IsPageTemplateMenuOpen: true,
                IsPagesSaved: false,
                ActivePageTemplateOptionIndex: 0,
                IsPageCarouselMenuOpen: false,
                ExperienceTitle: 'New Experience',
                CardTitle: 'Card 1',
                Tools: [],
                Pages: [],
                NewPage: Object.assign({}, templateNewPage),
                ActivePageSectionIndex: 0,
            }
            updated.Experience = tmpExperience;
            updated.IsCompleted = false;
            updated.IsFilesUploaded = false;
            updated.Index = 0;
            return updated;

        case EXPERIENCE_CREATE__SUCCEEDED:
            updated.IsCompleted = true;
            return updated;

        case EXPERIENCE_UPLOAD_FILE__SUCCEEDED:
            updated.IsFilesUploaded = true;
            updated.Experience = payload.experience;
            return updated;

        case EXPERIENCE_UPLOAD_GOOGLE_FILE__SUCCEEDED:
            tmpGoogleDocuments.push({
                googleFileGUID: payload.googleFileGUID,
                fileName: payload.fileName,
                isOpen: true,
            });
            updated.GoogleDocuments = tmpGoogleDocuments;
            return updated;

        case EXPERIENCE_TYPE__SUCCEEDED:
            tmpExperience.Type = payload.experienceType;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_TYPE_UPDATE__SUCCEEDED:
            tmpExperience.Type = payload.experienceType;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_INDEX_UPDATE__SUCCEEDED:

            if (payload.experienceIndex == 2
                && !updated.Experience.Pages.length) {
                tmpNewPage.PageGUID = uuid();
                tmpNewPage.IsRoot = true;
                tmpNewPage.Title = 'Page 1';
                tmpExperience.NewPage = tmpNewPage;
                tmpPages.push(tmpNewPage);
                tmpExperience.Pages = tmpPages;
            }
            tmpExperience.Index = payload.experienceIndex;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_TITLE_UPDATE__SUCCEEDED:
            if (payload.type == 'EXPERIENCE') {
                tmpExperience.ExperienceTitle = payload.title;
            } else if (payload.type == 'CARD') {
                tmpExperience.CardTitle = payload.title;
            } else if (payload.type == 'PAGE') {
                // update arr of pages
                tmpPageGUID = updated.Experience.NewPage.PageGUID;
                tmpUpdatePage = find_page_by_guid(tmpPageGUID, tmpPages);
                tmpUpdatePage.page.Title = payload.title;
                tmpPages[tmpUpdatePage.index] = tmpUpdatePage.page;
                tmpExperience.Pages = tmpPages;

                // update new page
                tmpNewPage.Title = payload.title;
                tmpExperience.NewPage = tmpNewPage;
            }
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_TOGGLE__SUCCEEDED:
            tmpExperience.IsCardTemplateMenuOpen = payload.toggle;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_FETCH__SUCCEEDED:
            updated.CardTemplates = payload.templates;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_SELECT__SUCCEEDED:
            tmpCardTemplate = Object.assign({}, templateCard);
            tmpCardTemplate.CardGUID = uuid();
            tmpCardTemplate.Content = payload.template.Content;
            tmpCardTemplate.Settings = JSON.parse(JSON.stringify(payload.template.Settings));
            tmpCardTemplate.Title = payload.template.Title;
            tmpCardTemplate.Type = payload.template.Type;
            tmpExperience.CardTemplate = tmpCardTemplate;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_UPDATE_IMAGE__SUCCEEDED:
            tmpCardTemplate.Settings[0].Default = payload.imgFile;
            tmpExperience.CardTemplate = tmpCardTemplate;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_UPDATE_COLOR__SUCCEEDED:
            tmpSettingIndex = search_object_index_by_value(tmpCardTemplate.Settings, payload.type);
            tmpCardTemplate.Settings[tmpSettingIndex].Default = payload.color;
            tmpExperience.CardTemplate = tmpCardTemplate;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_UPDATE_CONTENT__SUCCEEDED:
            tmpCardTemplate.Content = payload.content;
            tmpExperience.CardTemplate = tmpCardTemplate;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_SAVE__SUCCEEDED:
            tmpExperience.Index = 0;
            tmpExperience.IsCardTemplateSaved = true;
            tmpExperience.Card = Object.assign({}, tmpCardTemplate);
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_CARD_TEMPLATE_REMOVE__SUCCEEDED:
            tmpExperience.IsCardTemplateSaved = false;
            tmpExperience.CardTemplate = null;
            tmpExperience.CardTitle = '';
            tmpExperience.Card = null;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_PAGES_SAVE__SUCCEEDED:
            tmpExperience.Index = 0;
            tmpExperience.IsPagesSaved = true;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_PAGES_REMOVE__SUCCEEDED:
            tmpExperience.IsPageTemplateMenuOpen = true;
            tmpExperience.IsPagesSaved = false;
            tmpExperience.ActivePageTemplateOptionIndex = 0;
            tmpExperience.IsPageCarouselMenuOpen = false;
            tmpExperience.Tools = [];
            tmpExperience.Pages = [];
            tmpExperience.NewPage = Object.assign({}, templateNewPage);
            tmpExperience.ActivePageSectionIndex = 0;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_DOC_PANEL_TOGGLE__SUCCEEDED:
            tmpDoc = Object.assign({}, tmpGoogleDocuments[payload.index]);
            tmpDoc.isOpen = payload.toggle;
            tmpGoogleDocuments[payload.index] = tmpDoc;
            updated.GoogleDocuments = tmpGoogleDocuments;

            console.log('payload: ', payload);
            console.log('updated: ', updated);
            return updated;

        case EXPERIENCE_PAGE_TEMPLATE_TOGGLE__SUCCEEDED:
            tmpExperience.IsPageTemplateMenuOpen = payload.toggle;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_TEMPLATE_OPTION_SELECT__SUCCEEDED:
            tmpExperience.ActivePageTemplateOptionIndex = payload.index;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_TEMPLATE_FETCH__SUCCEEDED:
            updated.PageTemplates = payload.templates;
            return updated;

        case EXPERIENCE_PAGE_CAROUSEL_TOGGLE__SUCCEEDED:
            tmpExperience.IsPageCarouselMenuOpen = payload.toggle;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_CAROUSEL_ACTIVE__SUCCEEDED:
            tmpNewPage = find_page_by_guid(payload.pageGUID, tmpPages);
            tmpActiveSectionIndex = find_active_section_index(tmpNewPage.page.Sections);

            tmpExperience.NewPage = Object.assign({}, tmpNewPage.page);
            tmpExperience.ActivePageSectionIndex = tmpActiveSectionIndex;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_ADD_PAGE__SUCCEEDED:
            tmpNewPage = Object.assign({}, templateNewPage);
            tmpNewPage.PageGUID = uuid();
            tmpNewPage.Title = `Page ${find_number_of_display_page(tmpPages) + 1}`;
            tmpPages.push(tmpNewPage);

            tmpExperience.Pages = tmpPages;
            tmpExperience.NewPage = tmpNewPage;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_DELETE_PAGE__SUCCEEDED:
            tmpNewPage = find_page_by_guid(payload.pageGUID, tmpPages);
            tmpPages[tmpNewPage.index].IsDeleted = true;
            tmpSections = tmpPages[tmpNewPage.index].Sections;
            disconnect_pages_by_sections(tmpSections, tmpPages);

            tmpPagesLength = find_number_of_display_page(tmpPages);
            tmpIsRootPage = tmpPages[tmpNewPage.index].IsRoot;

            if (!tmpPagesLength) {   // check number of pages which existed and not deleted
                tmpNewPage = Object.assign({}, templateNewPage);
                tmpNewPage.IsRoot = true;
                tmpNewPage.PageGUID = uuid();
                tmpNewPage.Title = `Page ${tmpPagesLength + 1}`;
                tmpPages.push(tmpNewPage);
                tmpExperience.NewPage = tmpNewPage;
            } else {
                tmpPageGUID = find_previous_display_page_guid(tmpPages);
                tmpNewPage = find_page_by_guid(tmpPageGUID, tmpPages);
                // delete root page
                if (tmpIsRootPage) {
                    tmpNewPage.page.IsRoot = true;
                    tmpNewPage.page.ParentPageGUID = null;
                }
                tmpActiveSectionIndex = find_active_section_index(tmpNewPage.page.Sections);
                tmpExperience.ActivePageSectionIndex = tmpActiveSectionIndex;
                tmpExperience.NewPage = tmpNewPage.page;
            }

            // update tools
            deactive_tools_by_page_guid(payload.pageGUID, tmpTools);
            tmpExperience.Tools = tmpTools;
            tmpExperience.Pages = tmpPages;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_ADD_ELEM__SUCCEEDED:
            tmpUpdatePage = find_page_by_guid(tmpNewPage.PageGUID, tmpPages);
            if (!tmpUpdatePage.page.IsSplash
                || payload.type != 'SPLASH'
            ) {     // only one splash per page
                tmpNewSection = Object.assign({}, templateNewSection);
                tmpNewSection.SectionGUID = uuid();
                tmpNewSection.PageGUID = tmpNewPage.PageGUID;
                tmpNewSection.Index = Number(tmpIndex);
                tmpNewSection.Type = payload.type;
                tmpNewSection.IsActive = true;

                // update new page
                deactive_other_sections(tmpNewSection.SectionGUID, tmpNewPageSections);
                if (payload.type == 'SPLASH') {   // first elem of arr
                    tmpNewPageSections.unshift(tmpNewSection);
                } else {
                    tmpNewPageSections.push(tmpNewSection);
                }
                tmpActiveSectionIndex = find_active_section_index(tmpNewPageSections);
                tmpNewPage.Sections = tmpNewPageSections;
                if (payload.type == 'SPLASH') {
                    tmpNewPage.IsSplash = true;
                }

                // update arr of pages
                tmpPages[tmpUpdatePage.index] = Object.assign({}, tmpNewPage);

                // add to tools
                tmpTools.push(tmpNewSection);

                tmpExperience.Tools = tmpTools;
                tmpExperience.Pages = tmpPages;
                tmpExperience.NewPage = tmpNewPage;
                tmpExperience.ActivePageSectionIndex = tmpActiveSectionIndex;
                updated.Experience = tmpExperience;
                updated.Index = tmpIndex + 1;
            }
            return updated;

        case EXPERIENCE_PAGE_DELETE_ELEM__SUCCEEDED:
            tmpUpdatePage = find_page_by_guid(tmpNewPage.PageGUID, tmpPages);
            tmpSectionIndex = find_section_index_by_guid(tmpNewPage.Sections, payload.sectionGUID);

            // update new page
            tmpNewPageSections[tmpSectionIndex].IsDeleted = true;
            // case: BUTTON
            if (tmpNewPageSections[tmpSectionIndex].Type == 'BUTTON'
                && tmpNewPageSections[tmpSectionIndex].ConnectedPageGUID != null) {
                tmpConnectedPage = find_page_by_guid(tmpNewPageSections[tmpSectionIndex].ConnectedPageGUID, tmpPages);
                tmpConnectedPage.page.IsConnected = false;
                tmpPages[tmpConnectedPage.index] = Object.assign({}, tmpConnectedPage.page);
            }
            // case: SPLASH
            if (tmpNewPageSections[tmpSectionIndex].Type == 'SPLASH') {
                tmpNewPage.IsSplash = false;
            }
            tmpNewPage.Sections = tmpNewPageSections;
            // update arr of pages
            tmpPages[tmpUpdatePage.index] = Object.assign({}, tmpNewPage);

            // update tools
            deactive_tools_by_section_guid(payload.sectionGUID, tmpTools);

            tmpExperience.Tools = tmpTools;
            tmpExperience.Pages = tmpPages;
            tmpExperience.NewPage = tmpNewPage;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_COPY_ELEM__SUCCEEDED:
            tmpUpdatePage = find_page_by_guid(tmpNewPage.PageGUID, tmpPages);
            tmpSectionIndex = find_section_index_by_guid(tmpNewPage.Sections, payload.sectionGUID);
            tmpCopySection = tmpUpdatePage.page.Sections[tmpSectionIndex];

            if (tmpCopySection.Type != 'SPLASH'
            ) {     // only one splash per page
                tmpNewSection = Object.assign({}, tmpCopySection);
                tmpNewSection.SectionGUID = uuid();
                tmpNewSection.Index = Number(tmpIndex);
                tmpNewSection.ConnectedPageGUID = null;
                tmpNewSection.IsActive = true;

                // update new page
                deactive_other_sections(tmpNewSection.SectionGUID, tmpNewPageSections);
                tmpNewPageSections.insert(tmpSectionIndex + 1, tmpNewSection);  // insert after clone target
                tmpActiveSectionIndex = find_active_section_index(tmpNewPageSections);
                tmpNewPage.Sections = tmpNewPageSections;

                // update arr of pages
                tmpPages[tmpUpdatePage.index] = Object.assign({}, tmpNewPage);

                // add to tools
                tmpTools.push(tmpNewSection);

                tmpExperience.Tools = tmpTools;
                tmpExperience.Pages = tmpPages;
                tmpExperience.NewPage = tmpNewPage;
                tmpExperience.ActivePageSectionIndex = tmpActiveSectionIndex;
                updated.Experience = tmpExperience;
                updated.Index = tmpIndex + 1;
            }
            return updated;

        case EXPERIENCE_PAGE_SHUFFLE_ELEM__SUCCEEDED:
            tmpDragIndex = payload.dragIndex;
            tmpHoverIndex = payload.hoverIndex;

            tmpDragSection = tmpNewPage.Sections[tmpDragIndex];
            tmpHoverSection = tmpNewPage.Sections[tmpHoverIndex];
            if (tmpDragSection.Type != 'SPLASH'
                && tmpHoverSection.Type != 'SPLASH') {
                // update new page
                tmpNewPage = update(tmpNewPage, {
                    Sections: {
                        $splice: [[tmpDragIndex, 1], [tmpHoverIndex, 0, tmpDragSection]],
                    },
                });
                tmpActiveSectionIndex = find_active_section_index(tmpNewPage.Sections);

                // update arr of pages
                tmpUpdatePage = find_page_by_guid(tmpNewPage.PageGUID, tmpPages);
                tmpPages[tmpUpdatePage.index] = Object.assign({}, tmpNewPage);

                tmpExperience.Pages = tmpPages;
                tmpExperience.NewPage = tmpNewPage;
                tmpExperience.ActivePageSectionIndex = tmpActiveSectionIndex;
                updated.Experience = tmpExperience;
            }
            return updated;

        case EXPERIENCE_PAGE_SELECT_ELEM__SUCCEEDED:
            deactive_other_sections(payload.sectionGUID, tmpNewPageSections);
            tmpActiveSectionIndex = find_active_section_index(tmpNewPageSections);

            tmpNewPage.Sections = tmpNewPageSections;
            tmpExperience.NewPage = tmpNewPage;
            tmpExperience.ActivePageSectionIndex = tmpActiveSectionIndex;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_PAGE_UPDATE_ELEM__SUCCEEDED:

            tmpUpdatePage = Object.assign({}, tmpNewPage);
            if (payload.pageGUID) {
                tmpUpdatePage = find_page_by_guid(payload.pageGUID, tmpPages).page;
            }
            tmpUpdateSection = find_section_by_guid(tmpUpdatePage.Sections, payload.sectionGUID);

            if (tmpUpdateSection.Type == payload.type
                || ['SPLASH_CONTENT', 'SPLASH_IMG', 'SPLASH_COLOR', 'VIDEO_URL', 'VIDEO_CONFIRM'].indexOf(payload.type) != -1) {
                switch (payload.type) {
                    case 'EDITOR':
                        tmpUpdateSection.HtmlContent = payload.content;
                        break;
                    case 'BUTTON':
                        tmpUpdateSection.BtnContent = payload.content;
                        break;
                    case 'EMBED_PDF':
                        tmpUpdateSection.Pdf = payload.content;
                        break;
                    case 'SPLASH_CONTENT':
                        tmpUpdateSection.SplashContent = payload.content;
                        break;
                    case 'SPLASH_IMG':
                        tmpUpdateSection.SplashImg = payload.content;
                        break;
                    case 'SPLASH_COLOR':
                        tmpUpdateSection.SplashColor = payload.content;
                        break;
                    case 'VIDEO_URL':
                        tmpUpdateSection.VideoInput = payload.content;
                        break;
                    case 'VIDEO_CONFIRM':
                        tmpUpdateSection.VideoUrl = tmpUpdateSection.VideoInput;
                        break;
                    case 'IMAGE':
                        tmpUpdateSection.Img = payload.content;
                        break;
                    default:
                        break;
                }
                tmpExperience.NewPage = tmpUpdatePage;
                updated.Experience = tmpExperience;
            }
            return updated;

        case EXPERIENCE_PAGE_ELEM_CONNECT_PAGE__SUCCEEDED:
            tmpUpdateSection = find_section_by_guid(tmpNewPage.Sections, payload.sectionGUID);
            tmpConnectedPageGUID = tmpUpdateSection.ConnectedPageGUID;
            if (payload.pageGUID) {
                tmpUpdatePage = find_page_by_guid(payload.pageGUID, tmpPages);
                if (!tmpUpdatePage.page.IsRoot
                    && !tmpUpdatePage.page.IsConnected) {
                    // connect section
                    tmpUpdateSection.ConnectedPageGUID = payload.pageGUID;
                    // connect page
                    tmpUpdatePage.page.ParentPageGUID = tmpUpdateSection.PageGUID;
                    tmpUpdatePage.page.IsConnected = true;

                    // disconnect page
                    if (tmpConnectedPageGUID) {
                        tmpConnectedPage = find_page_by_guid(tmpConnectedPageGUID, tmpPages);
                        tmpConnectedPage.page.IsConnected = false;
                        tmpPages[tmpConnectedPage.index] = Object.assign({}, tmpConnectedPage.page);
                    }

                    // update arr of pages
                    tmpPages[tmpUpdatePage.index] = Object.assign({}, tmpUpdatePage.page);
                    tmpExperience.Pages = tmpPages;
                    tmpExperience.NewPage = tmpNewPage;
                    updated.Experience = tmpExperience;
                }
            } else {
                // disconnect page
                tmpUpdatePage = find_page_by_guid(tmpUpdateSection.ConnectedPageGUID, tmpPages);
                tmpUpdatePage.page.ParentPageGUID = null;
                tmpUpdatePage.page.IsConnected = false;
                // disconnect section
                tmpUpdateSection.ConnectedPageGUID = null;

                // update arr of pages
                tmpPages[tmpUpdatePage.index] = Object.assign({}, tmpUpdatePage.page);
                tmpExperience.Pages = tmpPages;
                tmpExperience.NewPage = tmpNewPage;
                updated.Experience = tmpExperience;
            }
            return updated;


        // UPDATE EXPERIENCE
        case EXPERIENCE_VIEW__SUCCEEDED:
            tmpExperience.ExperienceGUID = payload.experience.ExperienceGUID;
            tmpExperience.UpdateExperienceCardGUID = payload.experience.ExperienceCard.ExperienceCardGUID;
            tmpExperience.Type = payload.experience.ExperienceType;
            tmpExperience.IsCardTemplateSaved = true;
            tmpExperience.CardTemplate = payload.experience.ExperienceCard;
            tmpExperience.Card = payload.experience.ExperienceCard;
            tmpExperience.ExperienceTitle = payload.experience.ExperienceTitle;
            tmpExperience.IsPagesSaved = tmpExperience.Type == 0 ? false : true;
            tmpExperience.CardTitle = payload.experience.ExperienceCard.Title;
            tmpExperience.Pages = update_init_pages(payload.experience.ExperiencePages);
            tmpExperience.NewPage = find_root_page(payload.experience.ExperiencePages);
            tmpExperience.Tools = format_pages_tools(payload.experience.ExperiencePages);
            updated.Experience = tmpExperience;
            updated.IsCompleted = false;
            return updated;

        case EXPERIENCE_VIEW_HTML_FETCH__SUCCEEDED:
            tmpUpdatePage = find_page_by_guid(payload.pageGUID, tmpPages);
            tmpUpdateSection = find_section_by_guid(tmpUpdatePage.page.Sections, payload.sectionGUID);
            tmpUpdateSection.HtmlContent = payload.html;
            tmpUpdateSection.IsSyncServer = true;
            // update arr of pages
            tmpPages[tmpUpdatePage.index] = Object.assign({}, tmpUpdatePage.page);
            tmpExperience.Pages = tmpPages;
            updated.Experience = tmpExperience;
            return updated;

        case EXPERIENCE_UPDATE_FILE__SUCCEEDED:
            updated.IsFilesUpdated = true;
            updated.Experience = payload.experience;
            return updated;

        case EXPERIENCE_UPDATE__SUCCEEDED:
            updated.IsCompleted = true;
            return updated;

        default:
            return previousState;
    }
};

const find_page_by_guid = (guid, pages) => {
    for (let i = 0; i < pages.length; i++) {
        if (guid == pages[i].PageGUID) {
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
        if (sections[i].SectionGUID != guid) {
            sections[i].IsActive = false;
        } else {
            sections[i].IsActive = true;
        }
    }
}
const find_active_section_index = (sections) => {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].IsActive) {
            return i;
        }
    }
    return null;
}
const find_section_by_guid = (sections, targetSectionGUID) => {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].SectionGUID == targetSectionGUID) {
            return sections[i];
        }
    }
    return null;
}
const find_section_index_by_guid = (sections, targetSectionGUID) => {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].SectionGUID == targetSectionGUID) {
            return i;
        }
    }
    return null;
}
const deactive_tools_by_section_guid = (guid, sections) => {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].SectionGUID == guid) {
            sections[i].IsActive = false;
        }
    }
}
const deactive_tools_by_page_guid = (guid, sections) => {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].PageGUID == guid) {
            sections[i].IsActive = false;
        }
    }
}
const find_number_of_display_page = (pages) => {
    let count = 0;
    for (let i = 0; i < pages.length; i++) {
        if (!pages[i].IsDeleted) {
            count++;
        }
    }
    return count;
}
const find_previous_display_page_guid = (pages) => {
    for (let i = 0; i < pages.length; i++) {
        if (!pages[i].IsDeleted) {
            return pages[i].PageGUID;
        }
    }
}
const disconnect_pages_by_sections = (sections, pages) => {
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        if (section.Type == 'BUTTON'
            && section.ConnectedPageGUID) {
            let item = find_page_by_guid(section.ConnectedPageGUID, pages);
            item.page.IsConnected = false;
            pages[item.index] = item.page;
        }
    }
}
const find_root_page = (pages) => {
    for (let i = 0; i < pages.length; i++) {
        if (pages[i].IsRoot) {
            return pages[i];
        }
    }
    return null;
}
const format_pages_tools = (pages) => {
    let tools = [];
    for (let i = 0; i < pages.length; i++) {
        let page = pages[i];
        for (let j = 0; j < page.Sections.length; j++) {
            let section = page.Sections[j];
            section.PageGUID = page.PageGUID;
            section.IsDeleted = false;
            section.IsActive = false;
            tools.push(section);
        }
    }
    return tools;
}
const update_init_pages = (pages) => {
    for (let i = 0; i < pages.length; i++) {
        pages[i].IsDeleted = false;
    }
    return pages;
}

export default newexperienceReducer;
