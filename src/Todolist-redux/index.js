import React, {Component} from 'react'
import {message} from 'antd'
import store from './store'
import TodoListUi from './TodoListUi';
import axios from 'axios'
import 'antd/dist/antd.css';

class AntdTodolist extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange);
    }

    componentDidMount() {
        axios.get('mock/list.json').then((res) => {
            const data = res.data.list;
            const action = {
                type: 'init_list_item',
                data
            };
            store.dispatch(action)
        })
    }

    handleInputChange = (e) => {
        const action = {
            type: 'change_input_value',
            value: e.target.value
        };
        store.dispatch(action);
    };

    handleStoreChange = () => {
        this.setState(store.getState());
        // console.log('store发生了改变')
    };

    handleSubmit = () => {
        if (this.state.inputValue) {
            const action = {
                type: 'add_todo_item',
                // value: this.state.inputValue, 该值可以直接在store里面获取
            };
            store.dispatch(action)
        } else {
            message.info('输入框不能为空')
        }
    };

    handleDeteled = (index) => {
        const action = {
            type: 'deleted_todo_item',
            index
        };
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