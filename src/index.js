import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList';
import Transition from './Transition'

ReactDOM.render(<Transition />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}