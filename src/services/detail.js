import request from '../utils/request'

export const getDetail = (data) => {
    return request({
        url: `detail.json?id=${data.id}`
    })
};