import {createStore, applyMiddleware, compose} from 'redux'
import reducer from './reducer'
// 1.引入thunk
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    :
    compose;

const enhancer = composeEnhancers(
    // applyMiddleware(...middleware),
    applyMiddleware(thunk) // 2.使用thunk中间件
);

const store = createStore(
    reducer,
    enhancer
);

export default store