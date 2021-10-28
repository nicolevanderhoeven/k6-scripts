import http from 'k6/http';
import { sleep, check } from 'k6';

// export const options = {
//     duration: '10m',
//     vus: 50,
//     thresholds: {
//         http_req_duration: ['p(95)<500'],
//     },
// };

const domain = 'http://nicole.com.ph';

export default function () {
    Home();
    // ViewProduct();
    // AddToCart();
}

export function Home() {
    let res = http.get(domain, {tags: { name: '01_Home' }});
    check(res, {
      'is status 200': (r) => r.status === 200,
      '01-text verification': (r) => r.body.includes("Free shipping with $75 purchase!")
    });
    sleep(Math.random() * 5);
}

export function ViewProduct () {
    let res = http.get(domain + '/product/OLJCESPC7Z', {tags: { name: '02_ViewProduct' }});
    check(res, {
      'is status 200': (r) => r.status === 200,
      '02-text verification': (r) => r.body.includes("Add to Cart")
    });
    sleep(Math.random() * 5);
}

export function AddToCart () {
    let productid = 'OLJCESPC7Z';
    let params = {
        product_id: productid,
        quantity: 1,
    };
    let res = http.post(domain + '/cart', params, {tags: { name: '03_AddToCart' }});
    check(res, {
      'is status 200': (r) => r.status === 200,
      '03-text verification': (r) => r.body.includes("SKU: #OLJCESPC7Z")
    });
    sleep(Math.random() * 5);
}