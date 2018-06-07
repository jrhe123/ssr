import { all, call, put, takeEvery } from 'redux-saga/effects';

// Login
import { 
    dxLoginSaga,
} from './login/sagas';

export default function* rootSaga() {
    yield all([
        // Login
        dxLoginSaga(),
    ]);
}