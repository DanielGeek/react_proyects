import { createStore, compose, applyMiddleware } from 'redux';
// thunk para las peticiones async
import thunk from 'redux-thunk';

import { rootReducer } from '../reducers/rootReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// creo el store para almacenar los estados de mis reducers
export const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);