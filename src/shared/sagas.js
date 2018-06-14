import { all, call, put, takeEvery } from 'redux-saga/effects';

// Login
import { 
    dxLoginSaga,
} from './login/sagas';

// Dashboard
import { 
    dxLogoutSaga,
} from './dashboard/sagas';

// NewExperience
import { 
    dxExperienceTypeSaga,
    dxExperienceTypeUpdateSaga,
    dxExperienceIndexUpdateSaga,
} from './newexperience/sagas';

// Global
import {
    dxValidateTokenSaga,
    dxNavigateHistorySaga,
} from './globalSagas';


export default function* rootSaga() {
    yield all([
        // Login
        dxLoginSaga(),

        // Dashboard
        dxLogoutSaga(),

        // NewExperience
        dxExperienceTypeSaga(),
        dxExperienceTypeUpdateSaga(),
        dxExperienceIndexUpdateSaga(),
        
        // Global
        dxValidateTokenSaga(),
        dxNavigateHistorySaga(),
    ]);
}