import { all, call, put, takeEvery } from 'redux-saga/effects';

// Login
import { 
    dxLoginSaga,
} from './login/sagas';

// Dashboard
import { 
    dxLogoutSaga,
    
    dxChannelFetchSaga,

    dxHtmlFetchSaga,
    dxFetchExperienceSaga,
    dxDeleteExperienceSaga,
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
    dxChannelTypeUpdateSaga,
    dxChannelColorSaga,
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
        dxLogoutSaga(),
        
        dxChannelFetchSaga(),
        
        dxHtmlFetchSaga(),
        dxFetchExperienceSaga(),
        dxDeleteExperienceSaga(),

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


        // Channel
        // dxChannelTypeSaga(),
        // dxChannelTypeUpdateSaga(),
        // dxChannelColorSaga(),
        

        // Global
        dxValidateTokenSaga(),
        dxNavigateHistorySaga(),
        dxAlertSaga(),
        dxLoadingSaga(),
    ]);
}