import { all, call, put, takeEvery } from 'redux-saga/effects';

// Login
import { 
    dxLoginSaga,
} from './login/sagas';

// Dashboard
import { 
    dxLogoutSaga,
    dxChannelFetchSaga,
    dxFetchExperienceSaga,
} from './dashboard/sagas';

// NewExperience
import { 
    dxExperienceSaveSaga,
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
} from './newexperience/sagas';

// Global
import {
    dxValidateTokenSaga,
    dxNavigateHistorySaga,
    dxAlertSaga,
} from './globalSagas';


export default function* rootSaga() {
    yield all([
        // Login
        dxLoginSaga(),

        // Dashboard
        dxLogoutSaga(),
        dxChannelFetchSaga(),
        dxFetchExperienceSaga(),

        // NewExperience
        dxExperienceSaveSaga(),
        dxExperienceTypeSaga(),
        dxExperienceTypeUpdateSaga(),
        dxExperienceIndexUpdateSaga(),
        dxExperienceTitleUpdateSaga(),
        
        // Card
        dxExperienceCardTemplateMenuToggleSaga(),
        dxExperienceCardTemplateFetchSaga(),
        dxExperienceCardTemplateSelectSaga(),
        dxExperienceCardTemplateUpdateImageSaga(),
        dxExperienceCardTemplateUpdateColorSaga(),
        dxExperienceCardTemplateUpdateContentSaga(),
        dxExperienceCardTemplateSaveSaga(),
        dxExperienceCardTemplateRemoveSaga(),

        // Page
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
        
        // Global
        dxValidateTokenSaga(),
        dxNavigateHistorySaga(),
        dxAlertSaga(),
    ]);
}