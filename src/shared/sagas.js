import { all, call, put, takeEvery } from 'redux-saga/effects';

// Login
import { 
    dxLoginSaga,
} from './login/sagas';

// Dashboard
import { 
    dxLogoutSaga,
    dxHtmlFetchSaga,
    dxChannelFetchSaga,
    dxFetchExperienceSaga,
} from './dashboard/sagas';

// NewExperience
import { 
    // CREATE EXPERIENCE
    dxExperienceInitalSaga,
    dxExperienceCreateSaga,
    dxExperienceUploadFileSaga,
    dxExperienceTypeSaga,
    dxExperienceTypeUpdateSaga,
    dxExperienceIndexUpdateSaga,
    dxExperienceTitleUpdateSaga,

    dxExperienceCardTemplateMenuToggleSaga,
    dxExperienceCardTemplateFetchSaga,
    dxExperienceCardTemplateSelectSaga,
    dxExperienceCardTemplateUpdateImageSaga,
    dxExperienceCardTemplateUpdateColorSaga,
    dxExperienceCardTemplateUpdateContentSaga,
    dxExperienceCardTemplateSaveSaga,
    dxExperienceCardTemplateRemoveSaga,

    dxExperiencePagePagesSaveSaga,
    dxExperiencePagePagesRemoveSaga,
    dxExperiencePageTemplateMenuToggleSaga,
    dxExperiencePageTemplateOptionSelectSaga,
    dxExperiencePageTemplateFetchSaga,

    dxExperiencePageCarouselMenuToggleSaga,
    dxExperiencePageCarouselPageActiveSaga,

    dxExperiencePageAddPageSaga,
    dxExperiencePageDeletePageSaga,
    dxExperiencePageAddElemSaga,
    dxExperiencePageDeleteElemSaga,
    dxExperiencePageCopyElemSaga,
    dxExperiencePageShuffleElemSaga,
    dxExperiencePageSelectElemSaga,
    dxExperiencePageUpdateElemSaga,
    dxExperiencePageElemConnectPageSaga,

    // UPDATE EXPERIENCE
    dxExperienceViewSaga,
    dxExperienceViewHtmlFetchSaga,
    dxExperienceUpdateFileSaga,

} from './newexperience/sagas';

// Global
import {
    dxValidateTokenSaga,
    dxNavigateHistorySaga,
    dxAlertSaga,
    dxLoadingSaga,
} from './globalSagas';


export default function* rootSaga() {
    yield all([
        // Login
        dxLoginSaga(),

        // Dashboard
        dxLogoutSaga(),
        dxHtmlFetchSaga(),
        dxChannelFetchSaga(),
        dxFetchExperienceSaga(),

        // CREATE EXPERIENCE
        dxExperienceInitalSaga(),
        dxExperienceCreateSaga(),
        dxExperienceUploadFileSaga(),
        dxExperienceTypeSaga(),
        dxExperienceTypeUpdateSaga(),
        dxExperienceIndexUpdateSaga(),
        dxExperienceTitleUpdateSaga(),
        
        dxExperienceCardTemplateMenuToggleSaga(),
        dxExperienceCardTemplateFetchSaga(),
        dxExperienceCardTemplateSelectSaga(),
        dxExperienceCardTemplateUpdateImageSaga(),
        dxExperienceCardTemplateUpdateColorSaga(),
        dxExperienceCardTemplateUpdateContentSaga(),
        dxExperienceCardTemplateSaveSaga(),
        dxExperienceCardTemplateRemoveSaga(),

        dxExperiencePagePagesSaveSaga(),
        dxExperiencePagePagesRemoveSaga(),
        dxExperiencePageTemplateMenuToggleSaga(),
        dxExperiencePageTemplateOptionSelectSaga(),
        dxExperiencePageTemplateFetchSaga(),
        dxExperiencePageCarouselMenuToggleSaga(),
        dxExperiencePageCarouselPageActiveSaga(),
        dxExperiencePageAddPageSaga(),
        dxExperiencePageDeletePageSaga(),
        dxExperiencePageAddElemSaga(),
        dxExperiencePageDeleteElemSaga(),
        dxExperiencePageCopyElemSaga(),
        dxExperiencePageShuffleElemSaga(),
        dxExperiencePageSelectElemSaga(),
        dxExperiencePageUpdateElemSaga(),
        dxExperiencePageElemConnectPageSaga(),

        // UPDATE EXPERIENCE
        dxExperienceViewSaga(),
        dxExperienceViewHtmlFetchSaga(),
        dxExperienceUpdateFileSaga(),
        
        // Global
        dxValidateTokenSaga(),
        dxNavigateHistorySaga(),
        dxAlertSaga(),
        dxLoadingSaga(),
    ]);
}