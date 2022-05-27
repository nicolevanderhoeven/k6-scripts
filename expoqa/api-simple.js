import http from 'k6/http';

export default function () {
    let res = http.get('https://test-api.staging.k6.io');
}
