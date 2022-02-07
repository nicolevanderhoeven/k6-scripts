import launcher from 'k6/x/browser';
import { sleep } from 'k6';

export function browser () {
    const browser = launcher.launch('chromium', { headless: true});
    const context = browser.newContext();
    const page = context.newPage();

    // 01. Go to the homepage
    page.goto('http://ecommerce.k6.io', { waitUntil: 'networkidle' });
    page.waitForSelector('p[class="woocommerce-result-count"]');
    page.screenshot({ path: 'screenshots/01_homepage.png' });

    sleep(Math.random() * 4);

    // 02. View a product

    let element = page.$('a[class="woocommerce-LoopProduct-link woocommerce-loop-product__link"]');
    element.click();
    page.waitForSelector('button[name="add-to-cart"]');
    page.screenshot({ path: 'screenshots/02_view-product.png' });

    sleep(Math.random(4) * 9);

    // 03. Add the product to the cart

    // Click disclaimer
    element = page.$('a[class="woocommerce-store-notice__dismiss-link"]');
    element.click();
    
    element = page.$('button[name="add-to-cart"]');
    element.click();
    page.waitForLoadState('networkidle');
    page.screenshot({ path: 'screenshots/03_add-to-cart.png' });

    sleep(Math.random(4) * 9);

    // 04. Go to the cart
    element = page.$('a[title="View your shopping cart"]');
    element.click();
    page.waitForSelector('a[class="checkout-button button alt wc-forward"]');
    page.screenshot({ path: 'screenshots/04_view-cart.png' });

    sleep(Math.random(1) * 2);

    // 05. Checkout

    element = page.$('a[class="checkout-button button alt wc-forward"]');
    element.click();
    page.waitForSelector('button[name="woocommerce_checkout_place_order"]');
    page.screenshot({ path: 'screenshots/05_checkout.png' });

    sleep(Math.random() * 4);

}