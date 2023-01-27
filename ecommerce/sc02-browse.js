import { sleep, check, group } from 'k6'
import http from 'k6/http'
import { Homepage } from './homepage.js'
import { AddToCart, ViewProduct } from './product.js'
import { Checkout, ViewCart } from './cart.js'
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";

let productList = [];

// export const options = {

// }

export default function () {    
  SC02();
}

export function SC02() {
  Homepage();
  ViewProduct();
  ThinkTime();
}

export function ThinkTime(){
    sleep(randomIntBetween(3,5));
}

