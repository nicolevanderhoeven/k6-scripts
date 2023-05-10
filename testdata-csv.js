import Papa from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

const csvData = Papa.parse(open('./data/users.csv'), { header: true }).data;

export default function () {
    let rand = Math.floor(Math.random() * csvData.length);
    console.log('username: ', csvData[rand].username, ' / password: ', csvData[rand].password);
}