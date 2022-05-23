import { protocol } from './protocol.js';

export const options = {
    scenarios: {
        checkout_http: {
            executor: 'ramping-vus',
            exec: 'http',
            startVUs: 0,
            stages: [
                { duration: '5m', target: 10 },
                { duration: '10m', target: 10 },
                { duration: '1m', target: 0},
            ]
        },
    }
}

export function http () {
    protocol();
}