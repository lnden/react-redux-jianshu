import * as actionTypes from "./actionTypes";
import {fromJS} from 'immutable'

const defaultStatus = fromJS({
    focused: false,
    mouseIn: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state = defaultStatus, action) => {
    let newState = null;
    switch (action.type) {
        case actionTypes.SEARCH_FOCUS:
            newState = !state.get('focused');
            // immutable对象的set放
            return state.set('focused', newState);
        case actionTypes.CHANGE_LIST:
            // merge可以同时改变多个数组内容，相当于多次调用set，性能比set要好，set每次返回的都是immutable数据类型
            return state.merge({
                list: action.data,
                totalPage: action.totalPage
            });
            // return state.set('list', action.data).set('totalPage', action.totalPage);
        case actionTypes.SEARCH_MOUSEENTER:
            return state.set('mouseIn', true);
        case actionTypes.SEARCH_MOUSELEAVE:
            return state.set('mouseIn', false);
        case actionTypes.CHANGE_PAGE_LIST:
            return state.set('page', action.page);
        default :
            return state;
    }
}