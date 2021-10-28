import http from "k6/http";
import { sleep, check } from "k6";
import { Homepage } from "./homepage.js"

export default function (){
    Homepage();
}

