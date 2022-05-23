import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import { SharedArray } from 'k6/data';
import { vu } from 'k6/execution';
import { sleep } from 'k6';

const users = new SharedArray("Logins", function() {
    let data = papaparse.parse(open('./data/users-unique.csv'), { header: true }).data;
    return data;
});

export const options = {
    scenarios: {
        login: {
            executor: 'per-vu-iterations',
            vus: users.length,
            iterations: 1,
        },
    },
};

export default function () {
    console.log('VU: ' + vu.idInTest + ' / username: ', users[vu.idInTest - 1].username, ' / password: ', users[vu.idInTest - 1].password);
    sleep(1);
}