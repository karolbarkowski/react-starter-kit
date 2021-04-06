import axios from 'axios';
axios.defaults.baseURL = 'https://localhost:44308';

const get = (url: string, queryParams: any, onSuccess: any, onError: any, onFinally: any) => {
    axios.get(url, { params: queryParams })
        .then(onSuccess)
        .catch(onError)
        .then(onFinally);
};

const post = (url: string, body: any, onSuccess: any, onError: any, onFinally: any) => {
    axios.post(url, body)
        .then(onSuccess)
        .catch(onError)
        .then(onFinally);
};

const urls = {
    ACCOUNT: {
        LOGIN: '/api/account/login',
    }
};

export {
    get,
    post,
    urls,
};