import { sleep, group, check } from "k6";
import http from "k6/http";
import { randomIntBetween, randomItem } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";

export function BrowseTabletopDiceTrays() {
  let response;

  group(
    "02_BrowseTabletopDiceTrays",
    function () {
      response = http.get(
        "https://wyrmwoodgaming.com/product-category/products/dice-trays/",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "upgrade-insecure-requests": "1",
            accept:
              "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "sec-fetch-site": "same-origin",
            "sec-fetch-mode": "navigate",
            "sec-fetch-user": "?1",
            "sec-fetch-dest": "document",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      check(response, {
        'Tabletop dice tray page loaded': (r) => JSON.stringify(r).includes('Give your dice a place of honor at your table')
      });
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-includes/css/dashicons.min.css?ver=5.8.1",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "text/css,*/*;q=0.1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "style",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-includes/js/thickbox/thickbox.css?ver=5.8.1",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "text/css,*/*;q=0.1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "style",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-includes/css/dist/block-library/style.min.css?ver=5.8.1",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "text/css,*/*;q=0.1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "style",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/vendors-style.css?ver=5.3.2",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "text/css,*/*;q=0.1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "style",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/style.css?ver=5.3.2",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "text/css,*/*;q=0.1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "style",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/contact-form-7/includes/css/styles.css?ver=5.4.1",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "text/css,*/*;q=0.1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "style",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/revslider/public/assets/css/rs6.css?ver=6.2.21",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "text/css,*/*;q=0.1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "style",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/woocommerce-waitlist/includes/css/src/wcwl_frontend.min.css?ver=2.2.6",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "text/css,*/*;q=0.1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "style",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/kadence-slider/css/ksp.css?ver=2.3.1",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "text/css,*/*;q=0.1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "style",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/youtube-embed-plus/styles/ytprefs.min.css?ver=13.4.3",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "text/css,*/*;q=0.1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "style",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/themes/virtue_premium/assets/css/virtue.css?ver=4.9.34",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "text/css,*/*;q=0.1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "style",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/themes/virtue_premium/assets/css/virtue-woocommerce.css?ver=4.9.34",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "text/css,*/*;q=0.1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "style",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/themes/virtue_premium/assets/css/virtue_icons.css?ver=4.9.34",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "text/css,*/*;q=0.1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "style",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/themes/virtue_premium/assets/css/skins/default.css?ver=4.9.34",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "text/css,*/*;q=0.1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "style",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/themes/wyrmwood/style.css?ver=1.0.0",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "text/css,*/*;q=0.1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "style",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-includes/js/jquery/jquery.min.js?ver=3.6.0",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/cf7-invisible-recaptcha/js/cf7_invisible_recaptcha.js?ver=1.2.3",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/revslider/public/assets/js/rbtools.min.js?ver=6.2.21",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/revslider/public/assets/js/rs6.min.js?ver=6.2.21",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/duracelltomi-google-tag-manager/js/gtm4wp-form-move-tracker.js?ver=1.13.1",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/woocommerce/assets/js/jquery-cookie/jquery.cookie.min.js?ver=1.4.1",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/woocommerce-google-adwords-conversion-tracking-tag/js/public/wooptpm.js?ver=1.10.8",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/pixelyoursite-pro/dist/scripts/jquery.bind-first-0.2.3.min.js?ver=5.8.1",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/pixelyoursite-pro/dist/scripts/vimeo.min.js?ver=5.8.1",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/pixelyoursite-pro/dist/scripts/public.js?ver=8.3.5",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-includes/js/thickbox/thickbox.js?ver=3.1-20121105",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-includes/js/dist/vendor/regenerator-runtime.min.js?ver=0.13.7",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-includes/js/dist/vendor/wp-polyfill.min.js?ver=3.15.0",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/contact-form-7/includes/js/index.js?ver=5.4.1",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.70",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=5.5.1",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=5.5.1",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/woocommerce-google-adwords-conversion-tracking-tag/js/public/google-ads.js?ver=1.10.8",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/woocommerce-waitlist/includes/js/src/wcwl_frontend.min.js?ver=2.2.6",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/woocommerce-waitlist/includes/js/src/wcwl_account.min.js?ver=2.2.6",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/themes/virtue_premium/assets/js/min/bootstrap-min.js?ver=4.9.34",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-includes/js/hoverIntent.min.js?ver=1.10.1",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/themes/virtue_premium/assets/js/min/plugins-min.js?ver=4.9.34",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/themes/virtue_premium/assets/js/min/kt-sticky-min.js?ver=4.9.34",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/themes/virtue_premium/assets/js/min/magnific-popup-min.js?ver=4.9.34",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/themes/virtue_premium/assets/js/min/virtue_lightbox-min.js?ver=4.9.34",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-includes/js/imagesloaded.min.js?ver=4.1.4",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-includes/js/masonry.min.js?ver=4.2.2",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/themes/virtue_premium/assets/js/min/main-min.js?ver=4.9.34",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/themes/virtue_premium/assets/js/min/kt-add-to-cart-variation-min.js?ver=5.8.1",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/themes/virtue_premium/assets/js/min/wc-quantity-increment-min.js?ver=5.8.1",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-includes/js/wp-embed.min.js?ver=5.8.1",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/youtube-embed-plus/scripts/ytprefs.min.js?ver=13.4.3",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://wyrmwoodgaming.com/wp-includes/js/wp-emoji-release.min.js?ver=5.8.1",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "same-origin",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/uploads/2015/04/HorizontalLogo.svg",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/T-Trays-website-2-scaled-600x600.jpg",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/T-Trays-website-1-scaled-600x600.jpg",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/T-Trays-website-8-scaled-600x600.jpg",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/T-Trays-website-7-scaled-600x600.jpg",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/T-Trays-website-3-scaled-600x600.jpg",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/T-Trays-website-4-scaled-600x600.jpg",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/T-Trays-website-5-scaled-600x600.jpg",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/uploads/2015/06/T-Trays-website-6-scaled-600x600.jpg",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/Dungeons-dragons-T-Tray-3-scaled-600x600.jpg",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/Dungeons-dragons-T-Tray-2-scaled-600x600.jpg",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/Dungeons-dragons-T-Tray-1-scaled-600x600.jpg",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/uploads/2016/10/bic-1-scaled-600x600.jpg",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/mc4wp-premium/ecommerce3/assets/js/tracker.js?ver=4.8.18",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/youtube-embed-plus/scripts/fitvids.min.js?ver=13.4.3",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "script",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/seedprod-notification-bar-pro/template/images/close.png",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/plugins/seedprod-notification-bar-pro/template/images/open1.png",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/themes/virtue_premium/assets/css/virtue_print.css?ver=4.9.34",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "text/css,*/*;q=0.1",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "style",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/themes/virtue_premium/assets/css/fonts/virtue_icons.woff2?v5bjeb",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            origin: "https://wyrmwoodgaming.com",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept: "*/*",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "font",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://wyrmwoodgaming.com/wp-includes/js/thickbox/loadingAnimation.gif",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "same-origin",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://wyrmwoodgaming.com/wp-admin/admin-ajax.php?action=wooptpm_get_cart_items",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            accept: "application/json, text/javascript, */*; q=0.01",
            "x-requested-with": "XMLHttpRequest",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            "sec-fetch-site": "same-origin",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "empty",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
      response = http.get(
        "https://3kyj0yax3f42pj6jr2qjywv1-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/cropped-TreeMarkIcon-1-32x32.png",
        {
          headers: {
            "sec-ch-ua":
              '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": '"macOS"',
            accept:
              "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "sec-fetch-site": "cross-site",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "accept-encoding": "gzip, deflate, br",
            "accept-language":
              "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
          },
        }
      );
    }
  );
  sleep(randomIntBetween(1,5)); // sleep between 1 and 5 seconds
}