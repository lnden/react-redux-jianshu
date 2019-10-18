import React, {Component} from 'react'
import {Input,Button,List,message} from 'antd'
import store from '../store'
import {CHANGE_INPUT_VALUE,ADD_TOTO_ITEM,DELETED_TODO_ITEM} from '../store/actionTypes';
import 'antd/dist/antd.css';

const ListItem = List.Item;

class AntdTodolist extends Component {
    constructor(props){
        super(props);
        this.state = store.getState();
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        const action = {
            type: CHANGE_INPUT_VALUE,
            value: e.target.value
        };
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
        // console.log('store发生了改变')
    }

    handleSubmit() {
        if(this.state.inputValue){
            const action = {
                type: ADD_TOTO_ITEM,
                // value: this.state.inputValue, 该值可以直接在store里面获取
            };
            store.dispatch(action)
        }else{
            message.info('输入框不能为空')
        }
    }

    handleDeteled(index) {
        const action = {
            type: DELETED_TODO_ITEM,
            index
        };
        store.dispatch(action)
    }

    render() {
        return (
            <div style={{margin:'10px'}}>
                <div>
                    <Input
                        value={this.state.inputValue}
                        placeholder="todo info"
                        style={{width:300,marginRight:'10px'}}
                        onChange={this.handleInputChange}
                    />
                    <Button type="primary" onClick={this.handleSubmit}>提交</Button>
                </div>
                <List
                    style={{marginTop:'10px',width:'300px'}}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => {
                            return (
                                <ListItem>
                                    <span>{item}</span>
                                    <Button type="primary" onClick={this.handleDeteled.bind(this,index)}>删除</Button>
                                </ListItem>
                            )
                        }
                    }
                />
            </div>
        )
    }
}

export default AntdTodolist;