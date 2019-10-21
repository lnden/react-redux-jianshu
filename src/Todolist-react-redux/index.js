import React from 'react'
import {connect} from 'react-redux'
// import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETED_TODO_ITEM} from './store/actionTypes'
import {getInputChangeAction, getAddItemAction, getDeletedItemAction} from './store/actionCreators'

const TodoList = (props) => {
    const {inputValue, list, handleInputChange, handleSubmit, handleDelete} = props;
    return (
        <div>
            <div>
                <input type="text" value={inputValue} onChange={handleInputChange}/>
                <button onClick={handleSubmit}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return <li key={index} onClick={() => handleDelete(index)}>{item}</li>
                    })
                }
            </ul>
        </div>
    )
};

// 把store里面的数据映射给组件变成组件的props，state就是store里面的数据
const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
};

// store.dispatch方法挂载到props上面
const mapDispatchToProps = (dispatch) => {
    return {
        handleInputChange(e) {
            //console.log(e.target.value);
            // const action = {
            //     type: CHANGE_INPUT_VALUE,
            //     value: e.target.value
            // };
            // dispatch(action)
            dispatch(getInputChangeAction(e.target.value))
        },
        handleSubmit() {
            // const action = {
            //     type: ADD_TODO_ITEM
            // };
            // dispatch(action)
            dispatch(getAddItemAction())
        },
        handleDelete(index) {
            // const action = {
            //     type: DELETED_TODO_ITEM,
            //     index
            // };
            // dispatch(action)
            dispatch(getDeletedItemAction(index))
        }
    }
};

// 让TodoList和store进行连接, connect返回一个容器组件
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
