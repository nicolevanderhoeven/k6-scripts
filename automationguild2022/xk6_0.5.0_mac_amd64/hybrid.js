import { protocol } from './protocol.js';
import { browser } from './browser.js';

export const options = {
    scenarios: {
        checkout_http: {
            executor: 'ramping-vus',
            exec: 'http',
            startVUs: 0,
            stages: [
                { duration: '1m', target: 10 },
                { duration: '3m', target: 10 },
                { duration: '1m', target: 0},
            ]
        },
        checkout_browser: {
            executor: 'per-vu-iterations',
            exec: 'xk6browser',
            vus: 10,
            iterations: 1,
            startTime: '1m',
        },
    }
}

export function http () {
    protocol();
}

export function xk6browser () {
    browser();
}