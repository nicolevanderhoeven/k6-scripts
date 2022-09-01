import http from 'k6/http';
import { sleep, check } from 'k6';
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";
// import launcher from "k6/x/browser";

export const options = {
  scenarios: {
    API: {
      executor: 'ramping-vus',
      exec: 'GetProducts',
            startVUs: 0,
            stages: [
                { duration: '1m', target: 10 },
                { duration: '18m', target: 10 },
                { duration: '1m', target: 0},
            ]
    },
    // deletePods: {
    //   executor: 'per-vu-iterations',
    //   exec: 'expPodDelete',
    //   vus: 1,
    //   startTime: '3m',
    //   iterations: 1,
    // },
    delayTraffic: {
      executor: 'per-vu-iterations',
      exec: 'expContainerDelayTraffic',
      vus: 1,
      startTime: '3m',
      iterations: 1,
    },
  },
};

const domain = 'http://10.104.71.51';
const steadybitDomain = 'https://platform.steadybit.io/api';
const steadybitToken = 'BRc5dFEI.vRRB2neaTWClNYh5qnGflGvUg6p09RAL';
let params = {
  headers: {
    'Authorization': 'accessToken ' + steadybitToken,
  }
};

export default function () {    
    // GetProducts();
    // expPodStop();
    // expPodDelete();
    Browser();
    // expContainerDelayTraffic();
}

export function GetProducts() {
  let response = http.get(domain + '/products');
    check(response, {
        'GetProducts - is status 200': (r) => r.status === 200,
        'GetProducts - page returned': (r) => r.body.includes('Quadcopter Drone'),
    });
    sleep(randomIntBetween(1,5));
}

export function expPodStop() {
  // This function stops a pod with the word 'fashion' contained within its name.

  // Check whether experiments are found
  let response = http.get(steadybitDomain + '/experiments', params);
  check(response, {
    'is status 200': (r) => r.status === 200,
    'experiments found': (r) => r.body.includes('TerminateFashionPod'),
  });

  // Run the experiment
  let data;
  response = http.post(steadybitDomain + '/experiments/ADM-1/execute', data, params);
  check(response, {
    'expPodStop - is status 2xx': (r) => r.status >= 200,
  })
}

export function expPodDelete() {
  let data;
  let response = http.post(steadybitDomain + '/experiments/ADM-2/execute', data, params);
  check(response, {
    'expPodDelete - is status 2xx': (r) => r.status >= 200,
  })
}

export function Browser() {
  const browser = launcher.launch('chromium', { headless: false });
  const context = browser.newContext();
  const page = context.newPage();

  // Go to Homepage
  page.goto(domain);
  sleep(randomIntBetween(3,5));
  page.waitForSelector('//div[@class="deal__title card-title h5"]');
  page.screenshot({ path: 'screenshots/01_homepage.png' });

  page.close();
  browser.close();
}

export function expContainerDelayTraffic () {
  let data;
  let response = http.post(steadybitDomain + '/experiments/ADM-4/execute', data, params);
  check(response, {
    'expContainerDelayTraffic - is status 2xx': (r) => r.status >= 200,
  })
}