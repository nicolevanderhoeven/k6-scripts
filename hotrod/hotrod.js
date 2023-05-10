import http from "k6/http";
import { sleep, check } from "k6";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";
import Papa from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

const domain = "https://hotrod-sedemo.test.k6.io/";
const csvData = Papa.parse(open('customers.csv'), { header: false }).data;

export const options = {
    scenarios: {
        home: {
            executor: 'ramping-vus',
            exec: 'homepage',
            startVUs: 0,
            stages: [
                { duration: "30s", target: 10 },
                { duration: "10m", target: 10 },
                { duration: "30s", target: 0}
            ],
        },
        dispatch: {
            executor: 'ramping-vus',
            exec: 'dispatch',
            startVUs: 0,
            stages: [
                { duration: "30s", target: 10 },
                { duration: "10m", target: 10 },
                { duration: "30s", target: 0}
            ]
        }
    },
    ext : { 
        loadimpact: {
          projectID: 3640420,
          name: "Hotrod Dispatch",
          distribution: {
            'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 50 },
            'amazon:us:columbus': { loadZone: 'amazon:us:columbus', percent: 50 },
          },
        },
      },
}
export default function () {
    homepage();
    dispatch();
}

export function homepage() {
    let res = http.get(domain);
    check(res, {
        "status was 200": (r) => r.status == 200,
        "Homepage accessed": (r) => r.body.includes("HotROD - Rides On Demand"),
    })

    sleep(randomIntBetween(3, 5));
}

export function dispatch() {
    let rand = Math.floor(Math.random() * csvData.length);
    let customer = csvData[rand];
    let res = http.get(domain + 'dispatch?customer=' + customer)
    check(res, {
        "status was 200": (r) => r.status == 200,
        "Car dispatched": (r) => r.body.includes("ETA"),
    })

    sleep(randomIntBetween(3, 5));
}