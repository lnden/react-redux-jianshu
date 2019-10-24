import axios from 'axios';
import {message} from 'antd';

const service = axios.create({
    baseURL: 'mock',
    timeout: 6000,
});

service.interceptors.request.use((config) => {
    return config;
}, (error) => {
    Promise.reject(error);
});

service.interceptors.response.use((response) => {
        if (!response.data.success) {
            message.error('请求失败，请联系管理员!');
        }
        return response;
    },
    error => Promise.reject(error),
);

export default service;
