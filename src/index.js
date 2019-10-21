import  React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList';
// import Transition from './Transition'
// import AntdTodolist from './AntdTodolist'
import Todolist from './Todolist-react-redux'
import {Provider} from 'react-redux'
import store from './Todolist-react-redux/store/'

const App = (
    <Provider store={store}>
        <Todolist />
    </Provider>
);

ReactDOM.render(
    App, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}