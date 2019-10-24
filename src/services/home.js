import request from '../utils/request'

export const getHomeInfo = () => {
    return request({
        url: 'home.json',
        methods: 'post'
    })
};