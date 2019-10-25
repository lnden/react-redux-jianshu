import * as constants from './actionTypes'
import {fromJS} from 'immutable'

const defaultState = fromJS({
    login: false,
    username: '',
    password: ''
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_LOGIN:
            return state.set('login', action.value);
        case constants.LOGOUT:
            return state.set('login', action.value);
        default:
            return state;
    }
}