/* To run with Prometheus Remote Write output:
K6_PROMETHEUS_REMOTE_URL=https://prometheus-prod-10-prod-us-central-0.grafana.net/api/prom/push \
K6_PROMETHEUS_INSECURE_SKIP_TLS_VERIFY=false \
K6_PROMETHEUS_USER=200000 \
K6_PROMETHEUS_PASSWORD="TOKEN" \
./k6 run simple.js -o output-prometheus-remote
*/

import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  duration: '10m',
  vus: 30,
};

export default function () {
    let res = http.get('http://cluster.nicolevanderhoeven.com/api/v2/pokemon/pikachu', {tags: { name: '01_GetPikachu' }});
    check(res, {
      'is status 200': (r) => r.status === 200,
      'text verification': (r) => r.body.includes("pikachu")
    });
    sleep(Math.random() * 5);
}