import http from 'k6/http';
import { check } from 'k6';

let usernameArr = ['admin', 'test_user'];
let passwordArr = ['123', '1234'];

export default function() {

    let response = http.get('https://test.k6.io/my_messages.php');
    check(response, {
        'is Unauthorized': r => r.body.includes('Unauthorized'),
    })

    let csrfToken = response.html().find("input[name=csrftoken]").attr("value");

    // Get random username and password from array
    let rand = Math.floor(Math.random() * 2);
    let username = usernameArr[rand];
    let password = passwordArr[rand];
    console.log('username: ' + username, ' / password: ' + password);

    response = http.post('http://test.k6.io/login.php', { login: username, password: password, csrftoken: csrfToken });
    check(response, {
        'is status 200': (r) => r.status === 200,
        'Successful login': r => r.body.includes('successfully authorized'),
    })
}