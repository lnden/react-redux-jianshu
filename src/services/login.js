import request from '../utils/request'

export const getLogin = (accout, password) => {
    return request({
        url: `login.json?username=${accout}&password=${password}`
    })
};