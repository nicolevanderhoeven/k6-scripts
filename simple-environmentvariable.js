import http from 'k6/http';
import { sleep, check } from 'k6';

// export const options = {
//   duration: '10m',
//   vus: 30,
// };

const hostname = `http://${__ENV.DOMAIN}`;

export default function () {
    let res = http.get(hostname + '/my_messages.php');
}