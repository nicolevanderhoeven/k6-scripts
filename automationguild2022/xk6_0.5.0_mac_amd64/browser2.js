import launcher from "k6/x/browser";
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";
import { sleep } from 'k6';

// export const options = {
//     duration: '1m',
// };

export default function() {
    const browser = launcher.launch('chromium', { headless: false });
    const context = browser.newContext();
    const page = context.newPage();
    
    page.goto('http://ecommerce.test.k6.io/', { waitUntil: 'networkidle' });
    page.screenshot({ path: `screenshots/01_homepage.png` });

    // Click on the first product
    let elem = page.$('a[class="woocommerce-LoopProduct-link woocommerce-loop-product__link"]');
    elem.click();
    page.waitForLoadState('networkidle');
    page.screenshot({ path: `screenshots/02_product1.png` });

    sleep(randomIntBetween(5,10));

    // Dismiss disclaimer
    elem = page.$('a[class="woocommerce-store-notice__dismiss-link"]');
    elem.click();

    // Click on the add to cart button
    elem = page.$('button[name="add-to-cart"]');
    elem.click();
    page.waitForLoadState('networkidle');
    sleep(randomIntBetween(1,3));
    page.screenshot({ path: `screenshots/03_addedtocart.png` });

    // Click View Cart
    elem = page.$('a[class="button wc-forward"]');
    elem.click();
    page.waitForLoadState('networkidle');
    sleep(randomIntBetween(1,5));
    page.screenshot({ path: `screenshots/04_viewcart.png` });

    page.close();
    browser.close();
}
