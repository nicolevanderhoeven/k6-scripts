import { sleep } from 'k6'
// This is init code. It runs once per VU before VU code, once before setup, and once before teardown.

let counter = 0;
let usernames = ['user1', 'user2', 'user3', 'user4', 'user5', 'user6', 'user7', 'user8', 'user9', 'user10'];
let passwords = ['password1', 'password2', 'password3', 'password4', 'password5', 'password6', 'password7', 'password8', 'password9', 'password10'];
let rand = Math.floor(Math.random() * usernames.length);
let username = usernames[rand];
let password = passwords[rand];
console.log(`VU#${__VU} - username: ${username}, password: ${password}`);

export function setup() {
    // This is setup code. It runs once at the beginning of the test, regardless of the number of VUs.
}

export default function () {
    if (counter === 0) {
        // This code runs only once per VU, after the setup code but before the rest of the VU code.
        console.log(`This is the first iteration of VU#${__VU} using username ${username} and password ${password}`);
    }
    counter++;

     // This is VU code. It runs repeatedly until the test is stopped.
     console.log(`This is iteration #${counter} of VU#${__VU} using username ${username} and password ${password}`);

     sleep(1);
}

export function teardown() {
    // This is teardown code. It runs once at the end of the test, regardless of the number of VUs.

    for (let i = 0; i < usernames.length; i++) {
        console.log(`Check if logged in, and if so, log out username ${usernames[i]} and password ${passwords[i]}`);
    }
}