import React, {Component} from 'react'
import {message} from 'antd'
import store from '../store'
// import {CHANGE_INPUT_VALUE,ADD_TOTO_ITEM,DELETED_TODO_ITEM} from '../store/actionTypes';
import {getInputChangeAction,getAddItemAction,getDeletedItemAction} from '../store/actionCreators'
import 'antd/dist/antd.css';
import TodoListUi from './TodoListUi';

class AntdTodolist extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeteled = this.handleDeteled.bind(this);
    }

    handleInputChange(e) {
        // const action = {
        //     type: CHANGE_INPUT_VALUE,
        //     value: e.target.value
        // };
        const action = getInputChangeAction(e.target.value)
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
        // console.log('store发生了改变')
    }

    handleSubmit() {
        if(this.state.inputValue){
            // const action = {
                // type: ADD_TOTO_ITEM,
                // value: this.state.inputValue, 该值可以直接在store里面获取
            // };
            const action = getAddItemAction()
            store.dispatch(action)
        }else{
            message.info('输入框不能为空')
        }
    }

    handleDeteled(index) {
        // const action = {
        //     type: DELETED_TODO_ITEM,
        //     index
        // };
        const action = getDeletedItemAction(index)
        store.dispatch(action)
    }

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