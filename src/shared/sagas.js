import { all, call, put, takeEvery } from 'redux-saga/effects';

import { 
    fetchGistsSaga,
    addGistSaga,
    removeGistSaga,
} from './home/sagas';

// Login
import { 
    dxLoginSaga,
} from './login/sagas';

export default function* rootSaga() {
    yield all([
        fetchGistsSaga(),
        addGistSaga(),
        removeGistSaga(),

        // Login
        dxLoginSaga(),
    ]);
}