import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import createMemoryHistory from 'history/createMemoryHistory';
import { routerMiddleware } from 'react-router-redux';



import rootReducer from '../shared/reducer';
import socketReducer from '../shared/socketReducer';
import socketIoMiddleware from '../shared/socket';
import loginReducer from '../shared/login/reducer';
import dashboardReducer from '../shared/dashboard/reducer';
import newexperienceReducer from '../shared/newexperience/reducer';
import newchannelReducer from '../shared/newchannel/reducer'


const sagaMiddleware = createSagaMiddleware();

const reduxMiddlewares = [
    routerMiddleware(createMemoryHistory()),
    sagaMiddleware,
];

export default (initialState) => {
    const store = createStore(
        combineReducers({      
            socketReducer: socketReducer,
            root: rootReducer,
            login: loginReducer,
            dashboard: dashboardReducer,
            newexperience: newexperienceReducer,
            newchannel:newchannelReducer,

        }),
        initialState,
        compose(applyMiddleware(...reduxMiddlewares, socketIoMiddleware)),
    );

    store.runSaga = sagaMiddleware.run;

    store.close = () => store.dispatch(END);

    return store;
};
