import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
    ext: {
      loadimpact: {
        projectID: 3515857,
        // Test runs with the same name groups test runs together
        name: "k6 OSS-Flip the coin"
      }
    },
    scenarios: {
      sustain: {
        executor: 'ramping-vus',
        startVUs: 0,
        stages: [
          { duration: '30s', target: 100 },
          { duration: '60s', target: 100 },
          { duration: '30s', target: 0 }
        ],
        gracefulRampDown: '0s',
      },
    },
    thresholds: {
      'http_reqs{expected_response:true}': ['rate>=1'],
    }
};

export default function () {
    let domain='http://test.k6.io/';
    
    let res = http.get(domain, {tags: { name: '01_Home' }});
    check(res, {
      'is status 200': (r) => r.status === 200,
      'text verification': (r) => r.body.includes("Collection of simple web-pages suitable for load testing")
    });
    sleep(Math.random() * 5);
  
  res = http.get(domain + 'flip_coin.php', {
    tags: { name: '02_VisitFlipCoin' }});
    check(res, {
        'is status 200': (r) => r.status === 200,
        'text verification': (r) => r.body.includes("Your bet"),
    });
    sleep(Math.random() * 5);

    let data = {bet: 'heads'}
    res = http.post(domain + 'flip_coin.php', data, {
    tags: { name: '03_ClickHeads' }});
    check(res, {
        'is status 200': (r) => r.status === 200,
        'text verification': (r) => r.body.includes("Your bet: heads"),
    });
    sleep(Math.random() * 5);
}
