import http, { request } from 'k6/http';
import { parseHTML } from 'k6/html';
import { sleep, check } from 'k6';
import { jUnit, textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import { SharedArray } from "k6/data";

// const csvData = papaparse.parse(open('./data/users.csv'), { header: true }).data;
let csrfToken = 'NOT_FOUND';

const sharedData = new SharedArray("Shared Logins", function() {
    let data = papaparse.parse(open('./data/users.csv'), { header: true }).data;
    return data;
});

export default function () {
    Homepage();
        thinkTime();
    LoginPage();
        thinkTime();
    Login();
        thinkTime();
}

export function Homepage () {
    let response = http.get('https://test.k6.io', {tags: { name: '01_Home' }});
    check(response, {
      'is status 200': (r) => r.status === 200,
      '01_text verification': (r) => r.body.includes('Collection of simple web-pages suitable for load testing')
    });
}

export function thinkTime () {
    sleep(Math.random() * 5);
}

export function LoginPage () {
    let response = http.get('http://test.k6.io/my_messages.php', {tags: { name: '02_LoginPage' }});
    check(response, {
        'is status 200': (r) => r.status === 200,
        '02_text verification': (r) => r.body.includes('Unauthorized')
    });

    // Extract CSRF token
    let doc = parseHTML(response.body);
    csrfToken = doc.find('input[name="csrftoken"]').val();
}

export function Login() {

    // Get random user from shared array
    let randomUser = sharedData[Math.floor(Math.random() * sharedData.length)]

    let response = http.post('http://test.k6.io/login.php', { login: randomUser.username, password: randomUser.password, redir: '1', csrftoken: csrfToken });
    check(response, {
        '03_check user': (r) => r.body.includes('Welcome, ', randomUser.username, '!'),
        '03_text verification': (r) => r.body.includes('Logout')
    });
}

export function handleSummary(data) {
    return {
         'stdout': textSummary(data, { indent: ' ', enableColors: true}), // Show the text summary to stdout...
         'junit.xml': jUnit(data), // but also transform it and save it as a JUnit XML...
         'summary.json': JSON.stringify(data), // and a JSON with all the details...
         // And any other JS transformation of the data you can think of,
         // you can write your own JS helpers to transform the summary data however you like.
     }
}