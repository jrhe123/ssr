import { all, call, put, takeEvery } from 'redux-saga/effects';

// Home
import { 

} from './home/sagas';

// Global
import {
    dxNavigateHistorySaga,
    dxAlertSaga,
    dxLoadingSaga,
} from './globalSagas';


export default function* rootSaga() {
    yield all([
        // Home
        
        // Global
        dxNavigateHistorySaga(),
        dxAlertSaga(),
        dxLoadingSaga(),
    ]);
}