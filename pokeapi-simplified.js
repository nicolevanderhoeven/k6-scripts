import http from 'k6/http';
import { sleep, check } from 'k6';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import { SharedArray } from "k6/data";
import { Pods } from 'k6/x/chaos/k8s';

export const options = {
    scenarios: {
        pokeapi: {
            executor: 'ramping-vus',
            exec: 'getPokemon',
            startVUs: 0,
            stages: [
                { duration: '1m', target: 10 },
                { duration: '5m', target: 10 },
            ],
        },
        chaos: {
            executor: 'per-vu-iterations',
            exec: 'killAppPod',
            vus: 1,
            iterations: 1,
            startTime: '10s',
        },
    },
    thresholds: {
        http_req_failed: ['rate<=0.05'],
        load_generator_cpu_percent: ["value<=80"],
        load_generator_memory_used_percent: ["value<=80"],
        http_req_duration: ["p(95)<=5000"],
    },
};

const domain = 'http://cluster.nicolevanderhoeven.com/api/v2';
const sharedData = new SharedArray("Shared Logins", function() {
    let data = papaparse.parse(open('pokemon.csv'), { header: true }).data;
    return data;
});

export function getPokemon() {
    let randomMon = sharedData[Math.floor(Math.random() * sharedData.length)];
    let res = http.get(domain + '/pokemon/' + randomMon.name, {tags: { name: '01_GetPokemon' }});
    check(res, {
        'is status 200': (r) => r.status === 200,
        '01-text verification': (r) => r.body.includes(randomMon.name)
    });

    sleep(Math.random() * 5);
}

export function killAppPod() {
    let victim;
    const pod = new Pods();

    for (let i = 0; i < pod.list().length; i++) {
        victim = pod.list()[i];
        if (victim.startsWith('app')) {
            break;
        }
    }

    pod.killByName('default', victim);
}