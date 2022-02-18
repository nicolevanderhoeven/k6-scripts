import { sleep, check } from 'k6'
import http from 'k6/http'

export const options = {
    vus: 2,
    duration: '3m',
}

export default function () {
    let product = ['album', 'beanie', 'beanie-with-logo'];
    let rand = Math.floor(Math.random() * product.length);
    let productSelected = product[rand];
    let response = http.get('http://ecommerce.test.k6.io/product/' + productSelected, {
        tags: { name: 'ProductPage'},
    });
    check(response, {
        'Product page accessed': (r) => r.body.includes('Add to cart')
    })
    sleep(rand);
}