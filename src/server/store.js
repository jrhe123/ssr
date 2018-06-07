import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import createMemoryHistory from 'history/createMemoryHistory';
import { routerMiddleware } from 'react-router-redux';

import gistsReducer from '../shared/home/reducer';
import playlistReducer from '../shared/playlists/reducer';
import rootReducer from '../shared/reducer';
import socketReducer from '../shared/socketReducer';
import socketIoMiddleware from '../shared/socket';


import loginReducer from '../shared/login/reducer';


const sagaMiddleware = createSagaMiddleware();

const reduxMiddlewares = [
    routerMiddleware(createMemoryHistory()),
    sagaMiddleware,
];

export default (initialState) => {
    const store = createStore(
        combineReducers({
            gists: gistsReducer,
            playlists: playlistReducer,
            root: rootReducer,
            socketReducer: socketReducer,


            auth: loginReducer,
        }),
        initialState,
        compose(applyMiddleware(...reduxMiddlewares, socketIoMiddleware)),
    );

    store.runSaga = sagaMiddleware.run;

    store.close = () => store.dispatch(END);

    return store;
};
