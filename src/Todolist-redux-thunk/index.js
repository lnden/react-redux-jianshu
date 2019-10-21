import React, {Component} from 'react'
import {message} from 'antd'
import store from './store'
import {
    getInputChangeAction,
    getAddItemAction,
    getDeletedItemAction,
    getTodoList,
} from './store/actionCreators'
import TodoListUi from './TodoListUi';
import 'antd/dist/antd.css';

class AntdTodolist extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange);
    }

    componentDidMount() {
        const action = getTodoList();
        store.dispatch(action)
    }

    handleInputChange = (e) => {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    };

    handleStoreChange = () => {
        this.setState(store.getState());
    };

    handleSubmit = () => {
        if (this.state.inputValue) {
            const action = getAddItemAction();
            store.dispatch(action)
        } else {
            message.info('输入框不能为空')
        }
    };

    handleDeteled = (index) => {
        const action = getDeletedItemAction(index);
        store.dispatch(action)
    };

    render() {
        return (
            <TodoListUi
                inputValue={this.state.inputValue}
                handleInputChange={this.handleInputChange}
                handleSubmit={this.handleSubmit}
                list={this.state.list}
                handleDeteled={this.handleDeteled}
            />
        )
    }
}

export default AntdTodolist;