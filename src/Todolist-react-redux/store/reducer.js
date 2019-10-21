import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETED_TODO_ITEM} from './actionTypes'

const defaultState = {
    inputValue: '',
    list: ['数学', '语文', '英语']
};

export default (state = defaultState, action) => {
    let newState = null;
    switch (action.type) {
        case CHANGE_INPUT_VALUE:
            newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;
        case ADD_TODO_ITEM:
            newState = JSON.parse(JSON.stringify(state));
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            return newState;
        case DELETED_TODO_ITEM:
            newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.index, 1);
            return newState;
        default :
            return state
    }
}