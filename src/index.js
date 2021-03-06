import React from 'react';
import ReactDOM from 'react-dom';
import {Globalstyle} from './style.js'
import {Globalstyle as Globaliconfont} from './statics/iconfont/iconfont'
import App from './App'

// import TodoList from './TodoList';
// import Transition from './Transition'
// import TodoList from './Todolist-redux'
// import TodoList from './Todolist-redux-thunk'
// import TodoList from './Todolist-redux-saga'

// import TodoList from './Todolist-react-redux'
// import {Provider} from 'react-redux'
// import store from './Todolist-react-redux/store/'
// const App = (
//     <Provider store={store}>
//         <TodoList />
//     </Provider>
// );


ReactDOM.render(
    <section>
        {/*<TodoList />*/}
        {/*{App}*/}
        <Globalstyle/>
        <Globaliconfont/>
        <App/>
    </section>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}