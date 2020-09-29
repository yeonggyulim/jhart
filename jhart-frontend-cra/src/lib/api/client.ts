import axios from 'axios';

const client = axios.create();
/*
    글로벌 설정 예시:

    // API 주소를 다른 곳으로 사용
    client.defaults.baseURL = 'https://naver.com/'

    // 헤더 설정
    client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';

    // 인터셉터 설정
    axios.intercepter.response.use({
        response => {
            return response;
        },
        error => {
            return Promise.reject(error);
        }
    })
*/

export default client;
