import React, {Component, Fragment} from 'react'
import TodoItem from './TodoItem'
import './index.css'
import Test from './Test'

export default class Index extends Component {
    constructor(props) {
        super(props);
        // 当组件的state或者props发生改变的时候，render函数就会重新执行
        this.state = {
            inputValue: '数学',
            list: ['英语', '语文']
        }
    }

    handleChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({
            inputValue: value
        }))
        // this.setState({
        //     inputValue: e.target.value
        // })
    };

    handleSubmit = () => {
        const {inputValue} = this.state;
        if (!inputValue) {
            alert('输入框不能为空!');
            return
        }
        //prevState修改数据之前的数据
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
        // this.setState({
        //     list: [...list, inputValue],
        //     inputValue: ''
        // })
    };

    handleDelete = (index) => {
        this.setState((prevState) => {
            const list = [...prevState.list];
            list.splice(index, 1);
            return {list}
        })
        // this.setState({
        //     list: list
        // })
    };

    getTodoItem() {
        const {list} = this.state;
        return list.map((item, index) => {
            return (
                <TodoItem
                    key={index}
                    index={index}
                    content={item}
                    handleDelete={this.handleDelete}
                    test={'isRequired'}
                />
            )
        })
    }

    render() {
        const {inputValue} = this.state;
        console.log('render');
        return (
            <div className="container">
                <Fragment>
                    <label htmlFor="content">请输入内容：</label>
                    <input
                        className="input"
                        id="content"
                        type="text"
                        value={inputValue}
                        onChange={this.handleChange}
                    />
                    <button className="btn" onClick={this.handleSubmit}>提交</button>
                </Fragment>
                <ul>{this.getTodoItem()}</ul>
                <Test content={this.state.inputValue}/>
            </div>
        )
    }
}