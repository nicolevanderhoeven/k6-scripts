import { sleep, check } from 'k6';
import launcher from "k6/x/browser";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";

export default function () {
    const browser = launcher.launch('chromium', { headless: false });
    const context = browser.newContext();
    const page = context.newPage();
    const domain = "https://www.musicca.com/piano";

    // Load the page
    page.goto(domain);
    check(page, {
        '01-homepage': (p) => p.$('//h1').textContent().includes("Virtual piano"),
    });
    sleep(randomIntBetween(1,3));

    // Click Agree to cookies
    let element = page.$('//button[@mode="secondary"][1]');
    element.click();
    sleep(randomIntBetween(3,5));

    // Line 1: A4# C4 C4# A3# F4 F4 D4#
    Athreesharp(page);
    Cfour(page);
    Cfoursharp(page);
    Athreesharp(page);
    Ffour(page);
    sleep(0.25);
    Ffour(page);
    sleep(0.25);
    Dfoursharp(page);

    sleep(1);

    // Line 2: A3# C4 C4# A3# D4# D4# C4#
    Athreesharp(page);
    Cfour(page);
    Cfoursharp(page);
    Athreesharp(page);
    Dfoursharp(page);
    sleep(0.25);
    Dfoursharp(page);
    sleep(0.25);
    Cfoursharp(page);

    sleep(1);

    // Line 3: A3# C4 C4# A3# C4# D4# C4 A3# F3 D4# C4#
    Athreesharp(page);
    Cfour(page);
    Cfoursharp(page);
    Athreesharp(page);
    Cfoursharp(page);
    sleep(0.25);
    Dfoursharp(page);
    Cfour(page);
    sleep(0.25);
    Athreesharp(page);
    sleep(0.5);
    Fthree(page);
    Dfoursharp(page);
    sleep(0.25);
    Cfoursharp(page);

    sleep(3);
}

export function Fthree (page) {
    let element = page.$('//span[@data-key="81"]'); // F3
    element.click();
}

export function Gthreesharp (page) {
    let element = page.$('//span[@data-key="51"]'); // G3#
    element.click();
}

export function Athreesharp (page) {
    let element = page.$('//span[@data-key="52"]'); // A4#
    element.click();
}

export function Cfour(page) {
    let element = page.$('//span[@data-key="84"]'); // C4
    element.click();
}

export function Cfoursharp (page) {
    let element = page.$('//span[@data-key="54"]'); // C4#
    element.click();
}

export function Dfoursharp (page) {
    let element = page.$('//span[@data-key="55"]'); // D4#
    element.click();
}

export function Ffour (page) {
    let element = page.$('//span[@data-key="73"]'); // F4
    element.click();
}

