import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';
import { SharedArray } from "k6/data";

const sharedData = new SharedArray("Shared Logins", function() {
    let data = papaparse.parse(open('./data/users.csv'), { header: true }).data;
    return data;
});

export default function () {
    let rand = Math.floor(Math.random() * sharedData.length);
    console.log('username: ', sharedData[rand].username, ' / password: ', sharedData[rand].password);
}