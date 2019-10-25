import * as request from '../../../services/login'
import * as constants from './actionTypes'

export const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
});

export const getLogin = (accout, password) => {
    return (dispatch) => {
        request.getLogin({
            username: accout,
            username: accout,
            password: password
        }).then(res => {
            const result = res.data.data;
            if (result) {
                dispatch(changeLogin())
            } else {
                console.log('登录失败');
            }
        })
    }
};

export const logout = () => ({
    type: constants.LOGOUT,
    value: false
});