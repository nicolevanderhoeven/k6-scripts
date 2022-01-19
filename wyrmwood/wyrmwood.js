import http from "k6/http";
import { sleep, check } from "k6";
import { Homepage } from "./homepage.js"
import { BrowseTabletopDiceTrays } from "./browse.js"
import { parseHTML } from "k6/html";

export default function (){
    // Homepage();
    // BrowseTabletopDiceTrays();
    // View preorder page
    // Add to cart
    // Pledge calculator: https://wyrmwoodgaming.com/pledge-calculator/
    // View cart
    // Checkout
    // Sign up
    const allowedDomainsList = ['netdna-ssl.com', 'wyrmwoodgaming.com']
    let response = RequestWithEmbeddedResources('https://wyrmwoodgaming.com/', allowedDomainsList);
    check(response, {
        'Homepage loaded': (r) => JSON.stringify(r).includes('What Can Wyrmwood Bring to Your Table Today?')
});
}

export function RequestWithEmbeddedResources(mainUrl, allowedDomains = []) {
    let response = http.get(mainUrl);
    let html = parseHTML(response.body);
    let resourcesUrls = [];
    let resources = html
        .find('script[src]')
        .toArray();
    resources.forEach(function(resource) {
        let src = resource.attr('src');
        allowedDomains.forEach(function(domain) {
            if (src.includes(domain)) {
                // console.log('src = ' + src); //src = https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-includes/js/masonry.min.js?ver=4.2.2
                resourcesUrls.push(JSON.stringify(src));
            }
        });
        // console.log('src = ' + src);
    });
    // let batchRequest = [];
    // resourcesUrls.forEach(function(url) {
    //     batchRequest.push("['GET'," + url + "]");
    // });
    // console.log(batchRequest);
    response = response + http.batch([
        resourcesUrls.forEach(function(url) {
            return "['GET', " + url + "],";
        })  
    ]);
    return response;
}