import { sleep, check } from 'k6';
import launcher from "k6/x/browser";
import { vu } from 'k6/execution';
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";

const milliseconds = new Date().getTime();

export default function () {
    let accountUsername = 'berta' + milliseconds + '_' + vu.idInTest;
    const browser = launcher.launch('chromium', { headless: false });
    const context = browser.newContext();
    const page = context.newPage();
    const domain = "https://test-api.staging.k6.io";
    
    // 01-Homepage
    page.goto(domain);
    sleep(randomIntBetween(5,10));
    check(page, {
        '01-Homepage': (p) => p.$('//p[@class="description"]').textContent().includes("Collection of HTTP and WebSocket APIs demonstrating the power of k6"),
    });
    page.screenshot({ path: `screenshots/01-homepage.png` });

    // 02-Register
    let element = page.$('//a[contains(.,"register")]');
    element.click();
    sleep(randomIntBetween(5,10));
    check(page, {
        '02-Register page': (p) => p.$('//div[@class="response-info"]').textContent().includes("HTTP 405 Method Not Allowed"),
    });
    page.screenshot({ path: `screenshots/02-register.png` });

    // 02-Type in username, email, password
    element = page.type('//input[@name="username"]', accountUsername);
    element = page.type('//input[@name="email"]', accountUsername + '@crocodile.com');
    element = page.type('//input[@name="password"]', 'chompchomp');

    sleep(randomIntBetween(5,10));
    page.screenshot({ path: `screenshots/02-register-typed.png` });
    
    // 02-Click POST
    element = page.$('//button[@data-original-title="Make a POST request on the User Create Api resource"]');
    element.click();
    sleep(randomIntBetween(5,10));
    check(page, {
        '02-Register-submit': (p) => p.$('//div[@class="response-info"]').textContent().includes(accountUsername),
    });
    page.screenshot({ path: `screenshots/02-register-submitted.png` });

    // 03-Login
    element = page.$('//a[contains(.,"Log in")]');
    element.click();
    sleep(randomIntBetween(5,10));
    check(page, {
        '03-Login page': (p) => p.$('//label[@for="id_username"]').textContent().includes('Username'),
    });
    page.screenshot({ path: `screenshots/03-login.png` });

    // 03-Type in username, password
    element = page.type('//input[@name="username"]', accountUsername);
    element = page.type('//input[@name="password"]', 'chompchomp');

    // 03-Click Log in
    element = page.$('//input[@type="submit"]');
    element.click();

    sleep(randomIntBetween(5,10));
    check(page, {
        '03-Login-submit': (p) => p.$('//li[@class="dropdown"]').textContent().includes(accountUsername),
    });
    page.screenshot({ path: `screenshots/03-login-submit.png` });

    // 04-Click k6 Test Api
    element = page.$('//a[contains(.,"k6 Test Api")]');
    element.click();
    sleep(randomIntBetween(5,10));
    check(page, {
        '01-Homepage': (p) => p.$('//p[@class="description"]').textContent().includes("Collection of HTTP and WebSocket APIs demonstrating the power of k6"),
    });
    page.screenshot({ path: `screenshots/04-back-home.png` });


    // 04-Click My Crocodiles
    element = page.$('//a[contains(.,"my/crocodiles")]');
    element.click();
    sleep(randomIntBetween(5,10));
    check(page, {
        '04-My Crocodiles page': (p) => p.$('//div[@id="content"]').textContent().includes("Crocs belonging to the authenticated user"),
    });
    page.screenshot({ path: `screenshots/04-my-crocs.png` });

    // 05-Type new croc details
    element = page.type('//input[@name="name"]', accountUsername);
    element = page.type('//select[@name="sex"]', 'F');
    element = page.type('//input[@name="date_of_birth"]', '02/06/2012');
    sleep(randomIntBetween(5,10));
    page.screenshot({ path: `screenshots/05-type-new-croc.png` });

    // 05-Click POST
    element = page.$('//button[@data-original-title="Make a POST request on the My Crocodiles resource"]');
    element.click();
    sleep(randomIntBetween(5,10));
    check(page, {
        '05-New croc submitted': (p) => p.$('//div[@class="response-info"]').textContent().includes('2012-06-02'),
    });
    page.screenshot({ path: `screenshots/05-submit-new-croc.png` });

    page.close();
    browser.close();

    console.log('accountUserName: ' + accountUsername); // berta1653318205157_1
}