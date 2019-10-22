import * as actionTypes from "./actionTypes";

const defaultStatus = {
    focused: false
};

export default (state = defaultStatus, action) => {
    let newState = null;
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            newState = !state.focused;
            return {
                focused: newState
            };
        default :
            return state;
    }
}