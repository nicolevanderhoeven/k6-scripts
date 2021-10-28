import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  duration: '1m',
  vus: 5,
};

export default function () {
    let res = http.get('http://cluster.nicolevanderhoeven.com/api/v2/pokemon/pikachu', {tags: { name: '01_GetPokemon' }});
    check(res, {
      'is status 200': (r) => r.status === 200,
      'text verification': (r) => r.body.includes("pikachu")
    });
    sleep(Math.random() * 5);
}