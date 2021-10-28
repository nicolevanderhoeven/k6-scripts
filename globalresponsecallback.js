import http from 'k6/http';
import { check, sleep } from 'k6';

http.setResponseCallback(http.expectedStatuses(400));

export const options = {
    vus: 10,
    duration: '1m',
}

export default function () {

  // I expect this request to return an HTTP 404.
  let response = http.get('https://httpbin.test.k6.io/status/400');
  check(response, {
      'is status 400': (r) => r.status === 400,
  });

  sleep(1);

  http.get('https://test.k6.io');
}
