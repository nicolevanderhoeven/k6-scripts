import { SC01 } from './sc01-purchase.js'
import { SC02 } from './sc02-browse.js';
import exec from 'k6/execution';

export const options = {
    scenarios: {
        purchase: {
            executor: 'ramping-arrival-rate',
            exec: 'sc01',
            startRate: '1',
            timeUnit: '1s',
            preAllocatedVUs: 10,
            maxVUs: 50,
            stages: [
                { target: 1, duration: '20m'},
                { target: 1, duration: '30m'},
                { target: 0, duration: '10m'}
            ]
        },
        browse: {
            executor: 'ramping-arrival-rate',
            exec: 'sc02',
            startRate: '1',
            timeUnit: '1s',
            preAllocatedVUs: 10,
            maxVUs: 100,
            stages: [
                { target: 10, duration: '20m'},
                { target: 10, duration: '30m'},
                { target: 0, duration: '10m'}
            ]
        }
    }
}

export default function () {
    SC01();
    SC02();
}

export function sc01 () {
    SC01();
}

export function sc02 () {
    sc02();
}