import * as actionTypes from "./actionTypes";
import {fromJS} from 'immutable'
import axios from 'axios'

const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    data: fromJS(data),
    totalPage: Math.ceil(data.length / 10)
});

export const searchFocusAction = () => ({
    type: actionTypes.SEARCH_FOCUS
});

export const searchMouseEnterAction = () => ({
    type: actionTypes.SEARCH_MOUSEENTER
});

export const searchMouseLeaveAction = () => ({
    type: actionTypes.SEARCH_MOUSELEAVE
});

export const changePageList = (page) => ({
    type: actionTypes.CHANGE_PAGE_LIST,
    page
});

// 使用 redux-thunk 可以不用返回对象
export const getList = () => {
    return (dispatch) => {
        axios.get('mock/headerList.json').then((res) => {
            const data = res.data.data;
            const action = changeList(data)
            dispatch(action)
        }).catch((err) => {
            console.log(err)
        })
    }
};