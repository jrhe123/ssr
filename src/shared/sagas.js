import { all, call, put, takeEvery } from 'redux-saga/effects';

// Login
import { 
    dxLoginSaga,
} from './login/sagas';

// Dashboard
import { 
    dxDashboardNaviSaga,
    dxLogoutSaga,
    
    dxFetchChannelSaga,
    dxUpdateChannelSaga,

    dxHtmlFetchSaga,
    dxFetchExperienceSaga,
    dxDeleteExperienceSaga,

    dxFetchStreamChannelSaga,
    dxSelectStreamChannelSaga,
    dxCreateStreamSaga,
} from './dashboard/sagas';

// NewExperience
import { 
    // CREATE EXPERIENCE
    dxExperienceInitalSaga,
    dxExperienceCreateSaga,
    dxExperienceUploadFileSaga,
    dxExperienceUploadGoogleFileSaga,
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
    dxExperiencePageDocPanelToggleSaga,
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
    dxExperienceUpdateSaga,

} from './newexperience/sagas';

// NewChannel 
import { 
    dxChannelTypeSaga,
    dxChannelValUpdateSaga,
    dxChannelCreateSaga,
    dxViewChannelSaga,
    dxChannelUpdateSaga,
} from './newchannel/sagas';

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
        dxDashboardNaviSaga(),
        dxLogoutSaga(),
        
        // channel
        dxFetchChannelSaga(),
        dxUpdateChannelSaga(),
        dxViewChannelSaga(),
        
        // experience
        dxHtmlFetchSaga(),
        dxFetchExperienceSaga(),
        dxDeleteExperienceSaga(),

        // stream
        dxFetchStreamChannelSaga(),
        dxSelectStreamChannelSaga(),
        dxCreateStreamSaga(),

        // CREATE EXPERIENCE
        dxExperienceInitalSaga(),
        dxExperienceCreateSaga(),
        dxExperienceUploadFileSaga(),
        dxExperienceUploadGoogleFileSaga(),
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
        dxExperiencePageDocPanelToggleSaga(),
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
        dxExperienceUpdateSaga(),
        dxChannelUpdateSaga(),
        

        // Channel
        dxChannelTypeSaga(),
        dxChannelValUpdateSaga(),
        dxChannelCreateSaga(),
        

        // Global
        dxValidateTokenSaga(),
        dxNavigateHistorySaga(),
        dxAlertSaga(),
        dxLoadingSaga(),
    ]);
}