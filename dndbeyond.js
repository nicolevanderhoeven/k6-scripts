import http from "k6/http";
import { parseHTML } from "k6/html";
import { sleep, check } from "k6";

export default function () {
    let res = http.get("https://character-service.dndbeyond.com/character/v5/character/57899920?includeCustomItems=true");
    check(res, {
        "status was 200": (r) => r.status == 200,
        "HP found": (r) => r.body.includes("baseHitPoints"),
    })
}