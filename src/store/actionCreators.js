import {CHANGE_INPUT_VALUE,ADD_TOTO_ITEM,DELETED_TODO_ITEM} from "./actionTypes";

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