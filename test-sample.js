/*  Where contents of data.csv is:

    username,password
    admin,123
    test_user,1234
*/
import http from 'k6/http';
import { check, sleep } from 'k6';
import papaparse from 'https://jslib.k6.io/papaparse/5.1.1/index.js';

// Load CSV file and parse it using Papa Parse
const csvData = papaparse.parse(open('./data/users.csv'), { header: true }).data;

export default function () {
  // Now you can use the CSV data in your test logic below.
  // Below are some examples of how you can access the CSV data.

  // Loop through all username/password pairs
  csvData.forEach((userPwdPair) => {
    console.log(JSON.stringify(userPwdPair));
  });

  // Pick a random username/password pair
  let randomUser = csvData[Math.floor(Math.random() * csvData.length)];
  console.log('Random user: ', JSON.stringify(randomUser));

  const params = {
    login: randomUser.username,
    password: randomUser.password,
  };

  let res = http.post('https://test.k6.io/login.php', params);
  check(res, {
    'login succeeded': (r) =>
      r.status === 200 && r.body.indexOf('Logout') !== -1,
  });

  sleep(1);
}
