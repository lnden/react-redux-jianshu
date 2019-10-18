import {CHANGE_INPUT_VALUE,ADD_TOTO_ITEM,DELETED_TODO_ITEM} from './actionTypes';

const defaultState = {
    inputValue: '',
    list: [ ]
};

// state整个仓库所有的数据, action 是借书的 语句
export default (state = defaultState, action) => {
    let newState = null;
    switch(action.type){
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
            newState.list.splice(action.index,1);
            return newState;
        default :
            return state;
    }
}