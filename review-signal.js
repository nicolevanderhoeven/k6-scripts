import { sleep } from 'k6'
import { Rate } from 'k6/metrics'
import http from 'k6/http'

// let's collect all errors in one metric
let errorRate = new Rate('error_rate')

// See https://k6.io/docs/using-k6/options
export let options = {
  batch: 1,
  throw: true,
  stages: [
    { duration: '15m', target: 1000 },
  ],
  ext: {
    loadimpact: {
      distribution: {
        Virginia: { loadZone: 'amazon:us:ashburn', percent: 10 },
        London: { loadZone: 'amazon:gb:london', percent: 10 },
        Frankfurt: { loadZone: 'amazon:de:frankfurt', percent: 10 },
        Oregon: { loadZone: 'amazon:us:portland', percent: 10 },
        Ohio: { loadZone: 'amazon:us:columbus', percent: 10 },
        Tokyo: { loadZone: 'amazon:jp:tokyo', percent: 10 },
        Sydney: { loadZone: 'amazon:au:sydney', percent: 10 },
        Mumbai: { loadZone: 'amazon:in:mumbai', percent: 10 },
        Singapore: { loadZone: 'amazon:sg:singapore', percent: 10 },
        Brazil: { loadZone: 'amazon:br:sao paulo', percent: 10 },
      },
    },
  },
}

export default function () {
  let params = {
    headers: { 'X-CustomHeader': '1' },
  };
  let res = http.get('https://example.com', params)

  errorRate.add(res.status >= 400)

  sleep(1)
}