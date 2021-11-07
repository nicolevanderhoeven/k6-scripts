import http from "k6/http";
import { sleep, check } from "k6";
import { Homepage } from "./homepage.js"
import { BrowseTabletopDiceTrays } from "./browse.js"

export default function (){
    Homepage();
    BrowseTabletopDiceTrays();
    // View preorder page
    // Add to cart
    // Pledge calculator: https://wyrmwoodgaming.com/pledge-calculator/
    // View cart
    // Checkout
    // Sign up
}