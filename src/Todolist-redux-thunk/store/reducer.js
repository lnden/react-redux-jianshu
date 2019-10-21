import {CHANGE_INPUT_VALUE, ADD_TOTO_ITEM, DELETED_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes';

const defaultState = {
    inputValue: 'Todolist redux-thunk',
    list: []
};

// state整个仓库所有的数据, action 是借书的 语句
export default (state = defaultState, action) => {
    let newState = null;
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;
        case ADD_TOTO_ITEM:
            newState = JSON.parse(JSON.stringify(state));
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            return newState;
        case DELETED_TODO_ITEM:
            newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.index, 1);
            return newState;
        case INIT_LIST_ACTION:
            newState = JSON.parse(JSON.stringify(state));
            newState.list = action.data;
            return newState;
        default :
            return state;
    }
}