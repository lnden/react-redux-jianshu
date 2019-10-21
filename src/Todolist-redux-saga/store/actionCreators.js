import {CHANGE_INPUT_VALUE, ADD_TOTO_ITEM, DELETED_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST} from "./actionTypes";

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


export const getInitList = () => ({
    type: GET_INIT_LIST,
});