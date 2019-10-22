import * as actionTypes from "./actionTypes";
import {fromJS} from 'immutable'

const defaultStatus = fromJS({
    focused: false
});

export default (state = defaultStatus, action) => {
    let newState = null;
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            newState = !state.get('focused');
            // immutable对象的set放
            return state.set('focused', newState);
        default :
            return state;
    }
}