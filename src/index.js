import  React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList';
// import Transition from './Transition'
import AntdTodolist from './AntdTodolist'

ReactDOM.render(<AntdTodolist />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}