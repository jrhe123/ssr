import { all, call, put, takeEvery } from 'redux-saga/effects';

// Login
import { 

} from './login/sagas';

// Global
import {
    dxNavigateHistorySaga,
    dxAlertSaga,
    dxLoadingSaga,
} from './globalSagas';


export default function* rootSaga() {
    yield all([
        // Login
        
        // Global
        dxNavigateHistorySaga(),
        dxAlertSaga(),
        dxLoadingSaga(),
    ]);
}