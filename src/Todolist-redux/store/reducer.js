const defaultState = {
    inputValue: 'Todolist antd',
    list: []
};

// state整个仓库所有的数据, action 是借书的 语句
export default (state = defaultState, action) => {
    let newState = null;
    switch (action.type) {
        case 'change_input_value':
            newState = JSON.parse(JSON.stringify(state));
            newState.inputValue = action.value;
            return newState;
        case 'add_todo_item':
            newState = JSON.parse(JSON.stringify(state));
            newState.list.push(newState.inputValue);
            newState.inputValue = '';
            return newState;
        case 'deleted_todo_item':
            newState = JSON.parse(JSON.stringify(state));
            newState.list.splice(action.index, 1);
            return newState;
        case 'init_list_item':
            newState = JSON.parse(JSON.stringify(state));
            newState.list = action.data;
            return newState;
        default :
            return state;
    }
}