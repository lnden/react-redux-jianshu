import * as request from '../../../services/detail'
import {actionTypes} from './index'

const changeDetail = (result) => ({
    type: actionTypes.CHANGE_DETAIL,
    title: result.title,
    content: result.content
});

export const getDetail = (id) => {
    return (dispatch) => {
        request.getDetail({id: id}).then(res => {
            const result = res.data.data;
            dispatch(changeDetail(result))
        })
    }
};