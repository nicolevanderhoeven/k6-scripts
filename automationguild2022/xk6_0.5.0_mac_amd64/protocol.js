// Creator: k6 Browser Recorder 0.6.2

import { sleep, group, check } from "k6";
import http from "k6/http";

// export const options = { vus: 10, duration: "1m" };

export function protocol() {
  let response;

  group("page_1 - http://ecommerce.k6.io/", function () {
    response = http.get("http://ecommerce.k6.io/", {
      headers: {
        "upgrade-insecure-requests": "1",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
      },
    });
    sleep(1.5);
    check(response, {
        'Homepage returned': (r) => r.body.includes('Checkout')
    });

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-includes/css/dist/block-library/style.min.css?ver=5.8.3",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/vendors-style.css?ver=4.0.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/style.css?ver=4.0.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/base/gutenberg-blocks.css?ver=3.5.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/style.css?ver=3.5.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );
    sleep(7.4);

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/base/icons.css?ver=3.5.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/woocommerce/woocommerce.css?ver=3.5.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-includes/js/jquery/jquery.min.js?ver=3.6.0",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );
    sleep(0.8);

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.70",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=5.0.1",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=5.0.1",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js?ver=5.0.1",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/navigation.min.js?ver=3.5.0",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/skip-link-focus-fix.min.js?ver=20130115",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/vendor/pep.min.js?ver=0.4.3",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/woocommerce/header-cart.min.js?ver=3.5.0",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/footer.min.js?ver=3.5.0",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-includes/js/wp-embed.min.js?ver=5.8.3",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-includes/js/wp-emoji-release.min.js?ver=5.8.3",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/K6-logo.png",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );
    sleep(0.7);

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/album-1.jpg",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/beanie-2.jpg",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/beanie-with-logo-1.jpg",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/belt-2.jpg",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/cap-2.jpg",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/hoodie-2.jpg",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/hoodie-with-logo-2.jpg",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/hoodie-with-zipper-2.jpg",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/logo-1.jpg",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/long-sleeve-tee-2.jpg",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/polo-2.jpg",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/single-1.jpg",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );
    sleep(1.3);

    response = http.post(
      "http://ecommerce.k6.io/?wc-ajax=get_refreshed_fragments",
      {
        time: "1642593142412",
      },
      {
        headers: {
          accept: "*/*",
          "x-requested-with": "XMLHttpRequest",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          origin: "http://ecommerce.k6.io",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );
    sleep(0.6);

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/K6-logo.png",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/K6-logo.png",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );
    sleep(11.6);

    response = http.post(
      "http://ecommerce.k6.io/?wc-ajax=add_to_cart",
      {
        product_id: "16",
        product_sku: "woo-beanie",
        quantity: "1",
      },
      {
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "x-requested-with": "XMLHttpRequest",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          origin: "http://ecommerce.k6.io",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );
    sleep(5);
  });

  group("page_2 - http://ecommerce.test.k6.io/cart/", function () {
    response = http.get("http://ecommerce.test.k6.io/cart/", {
      headers: {
        "upgrade-insecure-requests": "1",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
      },
    });
    sleep(0.8);

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-includes/css/dist/block-library/style.min.css?ver=5.8.3",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/vendors-style.css?ver=4.0.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/style.css?ver=4.0.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/base/gutenberg-blocks.css?ver=3.5.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/css/select2.css?ver=5.0.1",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/style.css?ver=3.5.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );
    sleep(2.1);

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/base/icons.css?ver=3.5.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/woocommerce/woocommerce.css?ver=3.5.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-includes/js/jquery/jquery.min.js?ver=3.6.0",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );
    sleep(1.1);

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.70",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=5.0.1",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=5.0.1",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/country-select.min.js?ver=5.0.1",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/address-i18n.min.js?ver=5.0.1",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/cart.min.js?ver=5.0.1",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/selectWoo/selectWoo.full.min.js?ver=1.0.6",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js?ver=5.0.1",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/navigation.min.js?ver=3.5.0",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/skip-link-focus-fix.min.js?ver=20130115",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/vendor/pep.min.js?ver=0.4.3",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/woocommerce/header-cart.min.js?ver=3.5.0",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/footer.min.js?ver=3.5.0",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-includes/js/wp-embed.min.js?ver=5.8.3",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-includes/js/wp-emoji-release.min.js?ver=5.8.3",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/K6-logo.png",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/fonts/fa-solid-900.woff2",
      {
        headers: {
          origin: "http://ecommerce.test.k6.io",
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/beanie-2.jpg",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/album-1.jpg",
      {
        headers: {
          accept:
            "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );
    sleep(1.2);

    response = http.post(
      "http://ecommerce.test.k6.io/?wc-ajax=get_refreshed_fragments",
      {
        time: "1642593165391",
      },
      {
        headers: {
          accept: "*/*",
          "x-requested-with": "XMLHttpRequest",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          origin: "http://ecommerce.test.k6.io",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );
    sleep(12.2);
  });

  group("page_3 - http://ecommerce.test.k6.io/checkout/", function () {
    response = http.get("http://ecommerce.test.k6.io/checkout/", {
      headers: {
        "upgrade-insecure-requests": "1",
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-encoding": "gzip, deflate",
        "accept-language":
          "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
      },
    });
    sleep(1.8);

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-includes/css/dist/block-library/style.min.css?ver=5.8.3",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/vendors-style.css?ver=4.0.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/style.css?ver=4.0.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/base/gutenberg-blocks.css?ver=3.5.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/css/select2.css?ver=5.0.1",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/style.css?ver=3.5.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );
    sleep(2.4);

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/base/icons.css?ver=3.5.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/woocommerce/woocommerce.css?ver=3.5.0",
      {
        headers: {
          accept: "text/css,*/*;q=0.1",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );
    sleep(0.9);

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/checkout.min.js?ver=5.0.1",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );

    response = http.get(
      "http://ecommerce.test.k6.io/wordpress/wp-includes/js/wp-emoji-release.min.js?ver=5.8.3",
      {
        headers: {
          accept: "*/*",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );
    sleep(1.7);

    response = http.post(
      "http://ecommerce.test.k6.io/?wc-ajax=update_order_review",
      {
        address: "",
        address_2: "",
        city: "",
        country: "US",
        has_full_address: "false",
        payment_method: "cod",
        post_data:
          "billing_first_name%3D%26billing_last_name%3D%26billing_company%3D%26billing_country%3DUS%26billing_address_1%3D%26billing_address_2%3D%26billing_city%3D%26billing_state%3DCO%26billing_postcode%3D%26billing_phone%3D%26billing_email%3D%26order_comments%3D%26payment_method%3Dcod%26woocommerce-process-checkout-nonce%3D5e074aecf6%26_wp_http_referer%3D%252Fcheckout%252F",
        postcode: "",
        s_address: "",
        s_address_2: "",
        s_city: "",
        s_country: "US",
        s_postcode: "",
        s_state: "CO",
        security: "3856cb1898",
        state: "CO",
      },
      {
        headers: {
          accept: "*/*",
          "x-requested-with": "XMLHttpRequest",
          "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
          origin: "http://ecommerce.test.k6.io",
          "accept-encoding": "gzip, deflate",
          "accept-language":
            "en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2",
        },
      }
    );
  });
}