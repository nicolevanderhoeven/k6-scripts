import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  duration: '3m',
  vus: 30,
};

export default function () {
    let res = http.get('https://test.k6.io', {tags: { name: '01_Home' }});
    check(res, {
      'is status 200': (r) => r.status === 200,
    });
    sleep(Math.random() * 5);
}