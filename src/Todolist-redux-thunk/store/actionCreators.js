import {CHANGE_INPUT_VALUE, ADD_TOTO_ITEM, DELETED_TODO_ITEM, INIT_LIST_ACTION} from "./actionTypes";
import axios from 'axios'

export const getInputChangeAction = (value) => ({
    type: CHANGE_INPUT_VALUE,
    value
});

export const getAddItemAction = () => ({
    type: ADD_TOTO_ITEM,
});

export const getDeletedItemAction = (index) => ({
    type: DELETED_TODO_ITEM,
    index
});

export const InitListAction = (data) => ({
    type: INIT_LIST_ACTION,
    data
});

export const getTodoList = () => {
    return (dispatch) => {
        // 可以执行异步操作
        axios.get('mock/list.json').then((res) => {
            const data = res.data.list;
            const action = InitListAction(data);
            dispatch(action)
        })
    }
};