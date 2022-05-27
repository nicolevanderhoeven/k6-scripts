import { sleep, check } from 'k6';
import launcher from "k6/x/browser";
import { vu } from 'k6/execution';
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";

export default function () {
    browser ();
}

export function browser () {
    let milliseconds = new Date().getTime();
    let accountUsername = 'berta' + milliseconds + '_' + vu.idInTest;
    const browser = launcher.launch('chromium', { headless: false });
    const context = browser.newContext();
    const page = context.newPage();
    const domain = "https://test-api.staging.k6.io";
    
    // 01-Homepage
    page.goto(domain);
    page.waitForLoadState('networkidle');
    sleep(Math.random() * 5+3);
    check(page, {
        'browser-01a-Homepage': (p) => p.$('//p[@class="description"]').textContent().includes("Collection of HTTP and WebSocket APIs demonstrating the power of k6"),
    });
    page.screenshot({ path: `screenshots/01a-homepage.png` });

    // 02-Register
    let element = page.$('//a[contains(.,"register")]');
    element.click();
    page.waitForLoadState('networkidle');
    page.waitForSelector('//input[@name="username"]');
    sleep(Math.random() * 5+3);
    check(page, {
        'browser-02a-Register page': (p) => p.$('//div[@class="response-info"]').textContent().includes("HTTP 405 Method Not Allowed"),
    });
    page.screenshot({ path: `screenshots/02a-register.png` });

    // 02-Type in username, email, password
    element = page.type('//input[@name="username"]', accountUsername);
    element = page.type('//input[@name="email"]', accountUsername + '@crocodile.com');
    element = page.type('//input[@name="password"]', 'chompchomp');

    sleep(Math.random() * 5+3);
    page.screenshot({ path: `screenshots/02-register-typed.png` });
    
    // 02-Click POST
    element = page.$('//button[@data-original-title="Make a POST request on the User Create Api resource"]');
    element.click();
    page.waitForLoadState('networkidle');
    page.waitForSelector('//div[@class="response-info"]');
    check(page, {
        'browser-02b-Register-submit': (p) => p.$('//div[@class="response-info"]').textContent().includes(accountUsername),
    });
    page.screenshot({ path: `screenshots/02b-register-submitted.png` });
    sleep(randomIntBetween(5,10));

    // 03-Login
    element = page.$('//a[contains(.,"Log in")]');
    element.click();
    page.waitForLoadState('networkidle');
    page.waitForSelector('//div[@id="div_id_username"]');
    page.waitForSelector('//input[@type="submit"]');
    check(page, {
        'browser-03a-Login page': (p) => p.$('//div[@id="div_id_username"]').textContent().includes('Username'),
    });
    page.screenshot({ path: `screenshots/03a-login.png` });
    sleep(randomIntBetween(3,5));

    // 03-Type in username, password
    element = page.type('//input[@name="username"]', accountUsername);
    sleep(randomIntBetween(1,3));
    element = page.type('//input[@name="password"]', 'chompchomp');
    sleep(randomIntBetween(1,3));

    // 03-Click Log in
    element = page.$('//input[@type="submit"]');
    element.click();
    
    sleep(randomIntBetween(10,15));
    page.waitForLoadState('networkidle');
    page.waitForSelector('//li[@class="dropdown"]');
    check(page, {
        'browser-03b-Login-submit': (p) => p.$('//li[@class="dropdown"]').textContent().includes(accountUsername),
    });
    page.screenshot({ path: `screenshots/03b-login-submit.png` });

    // 04-Click k6 Test Api
    element = page.$('//a[contains(.,"k6 Test Api")]');
    element.click();
    page.waitForLoadState('networkidle');
    page.waitForSelector('//p[@class="description"]');
    sleep(randomIntBetween(3,5));
    check(page, {
        'browser-01-Homepage': (p) => p.$('//p[@class="description"]').textContent().includes("Collection of HTTP and WebSocket APIs demonstrating the power of k6"),
    });
    page.screenshot({ path: `screenshots/01-back-home.png` });

    // 04-Click My Crocodiles
    element = page.$('//a[contains(.,"my/crocodiles")]');
    element.click();
    page.waitForLoadState('networkidle');
    page.waitForSelector('//div[@id="content"]');
    sleep(randomIntBetween(3,5));
    check(page, {
        'browser-04a-My Crocodiles page': (p) => p.$('//div[@id="content"]').textContent().includes("Crocs belonging to the authenticated user"),
    });
    page.screenshot({ path: `screenshots/04a-my-crocs.png` });

    // 05-Type new croc details
    element = page.type('//input[@name="name"]', accountUsername);
    element = page.type('//select[@name="sex"]', 'F');
    element = page.type('//input[@name="date_of_birth"]', '01/06/2012');
    sleep(Math.random() * 5+3);

    // 05-Click POST
    element = page.$('//button[@data-original-title="Make a POST request on the My Crocodiles resource"]');
    element.click();
    page.waitForLoadState('networkidle');
    page.waitForSelector('//div[@class="response-info"]');
    sleep(Math.random() * 5+3);
    check(page, {
        'browser-05a-New croc submitted': (p) => p.$('//div[@class="response-info"]').textContent().includes('2012-06-02'),
    });
    page.screenshot({ path: `screenshots/05a-submit-new-croc.png` });

    page.close();
    browser.close();

    console.log('accountUserName: ' + accountUsername); // berta1653318205157_1
}