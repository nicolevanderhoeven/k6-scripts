import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    vus: 2,
    duration: '3m',
}

export default function () {
    let res = http.get('https://test.k6.io');
    check(res, {
        'is status 200': (r) => r.status === 200,
    });
    sleep(1);
}