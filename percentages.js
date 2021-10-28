import http from 'k6/http';
import { sleep, check } from 'k6';
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";

export const options = {
  duration: '1m',
  vus: 1,
};


export default function () {
    const domain = 'https://test.k6.io';
    let randomNumber = randomIntBetween(1,100);
    console.log('Random number is ' + randomNumber);
    let client;
    if (randomNumber < 50) {
        client = 'clientA'
    } else if (randomNumber < 85) {
            client = 'clientB'
    } else {
            client = 'clientC'
    }

    let res = http.get(domain + '/status-check/v1.0/' + client);
    console.log('Client selected: ' + client);

    sleep(randomIntBetween(1,5));
}