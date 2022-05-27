import launcher from "k6/x/browser";

export default function() {
    const browser = launcher.launch('chromium', { headless: false });
    const context = browser.newContext();
    const page = context.newPage();
    
    page.goto('https://test-api.staging.k6.io');
    page.screenshot({ path: `screenshots/homepage.png` });

    page.close();
    browser.close();
}
