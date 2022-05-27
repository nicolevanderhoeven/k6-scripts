import { api } from './api.js';
import { browser } from './browser.js';
import { chaos } from './chaos.js';

export const options = {
    scenarios: {
        protocol: {
            executor: 'ramping-vus',
            exec: 'load',
            startVUs: 0,
            stages: [
                { duration: '1m', target: 10 },
                { duration: '3m', target: 10 },
                { duration: '1m', target: 0},
            ]
        },
        browser: {
            executor: 'constant-vus',
            exec: 'automation',
            vus: 1,
            duration: '5m'
        },
        chaos: {
            executor: 'per-vu-iterations',
            exec: 'chaostest',
            vus: 1,
            iterations: 1,
            startTime: '1m',
        }
    }
}

export function load () {
    api();
}

export function automation () {
    browser();
}

export function chaostest () {
    chaos();
}