import http from 'k6/http';
import { sleep, check } from 'k6';
import { vu } from 'k6/execution';

const domain = "https://test-api.staging.k6.io";
const milliseconds = new Date().getTime();
let authToken = '';

export default function () {
    homepage();
    register();
    login();
    addCroc();
    getCrocodiles();
}

export function api() {
    homepage();
    register();
    login();
    addCroc();
    getCrocodiles();
}

export function homepage () {
    let res = http.get(domain);
    check(res, {
        'api-01-Homepage is status 200': (r) => r.status === 200,
        'api-01-Homepage': (r) => r.body.includes("Collection of HTTP and WebSocket APIs demonstrating the power of k6")
    });
    sleep(Math.random() * 5);

}

export function register () {
    let accountUsername = 'berta' + milliseconds + '_' + vu.idInTest;

    let res = http.post(domain + '/user/register/', {
        username: accountUsername,
        password: 'chompchomp',
        email: accountUsername + '@crocodile.com',
     });

    check(res, {
        'api-02-Registration is status 201': (r) => r.status === 201,
        'api-02-Registered successfully': (r) => r.body.includes(accountUsername)
    });

    sleep(Math.random() * 5);
}

export function login () {
    let accountUsername = 'berta' + milliseconds + '_' + vu.idInTest;
    let res = http.post(domain + '/auth/token/login/', {
        username: accountUsername,
        password: 'chompchomp',
    });

    check(res, {
        'api-03-Login is status 200': (r) => r.status === 200,
        'api-03-Logged in successfully': (r) => r.body.includes('access')
    });
    authToken = res.json('access');
}

export function addCroc() {
    let accountUsername = 'berta' + milliseconds + '_' + vu.idInTest;
    let params = {
        headers: {
            'Authorization': 'Bearer ' + authToken,
        },
    };
    let res = http.post(domain + '/my/crocodiles/', {
        name: accountUsername,
        sex: 'F',
        date_of_birth: '2012-06-02',
    }, params);

    check(res, {
        'api-04-Add crocodile is status 201': (r) => r.status === 201,
        'api-04-Added successfully': (r) => r.body.includes(accountUsername)
    });

    sleep(Math.random() * 5);
}

export function getCrocodiles () {
    let accountUsername = 'berta' + milliseconds + '_' + vu.idInTest;
    let params = {
        headers: {
            'Authorization': 'Bearer ' + authToken,
        },
    };
    let res = http.get(domain + '/my/crocodiles/', params);

    check(res, {
        'api-05-Get crocodiles is status 200': (r) => r.status === 200,
        'api-05-Get crocodiles': (r) => r.body.includes(accountUsername)
    });
    sleep(Math.random() * 5);
}