import {createStore,applyMiddleware,compose} from 'redux'
import reducer from './reducer'
// 一.引入thunk
// import thunk from 'redux-thunk'

// 1.引入saga
import createSagaMiddleware from 'redux-saga'
// 2.引入Generator函数
import TodoSagas from './sagas'

// 3.生成saga中间件
const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
     :
    compose;

const enhancer = composeEnhancers(
    // applyMiddleware(...middleware),
    // applyMiddleware(thunk) // 二.使用thunk中间件
    applyMiddleware(sagaMiddleware) // 4.使用saga中间件
);

const store = createStore(
    reducer,
    enhancer
);

// 5. 启动saga中间件
sagaMiddleware.run(TodoSagas);

export default store