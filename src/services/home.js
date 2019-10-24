import request from '../utils/request'

export const getHomeInfo = () => {
    return request({
        url: 'home.json'
    })
};

export const getMoreData = (data) => {
    return request({
        url: `homeList.json?page=${data.page}`
    })
};