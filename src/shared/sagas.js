import { all, call, put, takeEvery } from 'redux-saga/effects';

// Login
import { 
    dxLoginSaga,
} from './login/sagas';

// Logout
import { 
    dxLogoutSaga,
} from './dashboard/sagas';

export default function* rootSaga() {
    yield all([
        // Login
        dxLoginSaga(),

        // Logout
        dxLogoutSaga(),
    ]);
}