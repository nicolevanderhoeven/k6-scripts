import { sleep, check } from "k6";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.1.0/index.js";
import Papa from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import tracing from "k6/x/tracing";

const domain = "https://hotrod-sedemo.test.k6.io/";
const csvData = Papa.parse(open('customers.csv'), { header: false }).data;
const http = new tracing.Http(
    {
      propagator: "jaeger"
    }
);

export const options = {
    scenarios: {
        home: {
            executor: 'ramping-vus',
            exec: 'homepage',
            startVUs: 0,
            stages: [
                { duration: "30s", target: 20 },
                { duration: "10m", target: 20 },
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
    thresholds: { 
        http_req_duration: ['p(95) < 1000'], // Response times average below 1s
        http_req_failed: ['rate < 0.01'],  // Error rate below 1%
      },
    ext : { 
        loadimpact: {
          projectID: 3640420,
          name: "Hotrod Dispatch",
          distribution: {
            'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 50 },
            'amazon:de:frankfurt': { loadZone: 'amazon:de:frankfurt', percent: 30 },
            'amazon:au:sydney': { loadZone: 'amazon:au:sydney', percent: 20 },
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
    });
    console.log(`trace_id=${res.trace_id}`);

    sleep(randomIntBetween(3, 5));
}

export function dispatch() {
    let rand = Math.floor(Math.random() * csvData.length);
    let customer = csvData[rand];
    let res = http.get(domain + 'dispatch?customer=' + customer)
    check(res, {
        "status was 200": (r) => r.status == 200,
        "Car dispatched": (r) => r.body.includes("ETA"),
    });
    console.log(`trace_id=${res.trace_id}`);

    sleep(randomIntBetween(3, 5));
}