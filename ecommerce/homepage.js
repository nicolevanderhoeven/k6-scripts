import { sleep, group, check } from 'k6'
import http from 'k6/http'
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";

// let productList = [];

export default function () {
    Homepage();
}

export function Homepage () {    
  let response;

  group('page_Homepage', function () {
    response = http.get('http://ecommerce.test.k6.io/', {
      tags: {
        name: 'Homepage',
        type: 'HTML',
      }
    })
    check(response, {
        'page_Homepage accessed': (r) => r.body.includes('Shop')
    });

    randomIntBetween(3, 5);
    
    //Extract products
    // productList = ['album', 'beanie', 'beanie-with-logo'];
    // <a href="http://ecommerce.test.k6.io/product/album/" 
    // /name="(challenger\[order_[0-9]+\])" type="hidden" value="([0-9]+)"/g
    let productRegex = /k6\.io\/product\/(\w+)\//g;
    // let productMatch = productRegex.exec(response.body);
    for (let productMatch of response.body.matchAll(productRegex)){
        productList.push(productMatch[1]);
        console.log('productMatch[1]: ' + productMatch[1]);
    }
    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-includes/css/dist/block-library/style.min.css?ver=5.9',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/vendors-style.css?ver=4.0.0',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/style.css?ver=4.0.0',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/base/gutenberg-blocks.css?ver=3.5.0',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/style.css?ver=3.5.0',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/base/icons.css?ver=3.5.0',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/woocommerce/woocommerce.css?ver=3.5.0',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-includes/js/jquery/jquery.min.js?ver=3.6.0',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )
    sleep(0.7)

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.70',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=5.0.1',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=5.0.1',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js?ver=5.0.1',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/navigation.min.js?ver=3.5.0',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/skip-link-focus-fix.min.js?ver=20130115',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/vendor/pep.min.js?ver=0.4.3',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/woocommerce/header-cart.min.js?ver=3.5.0',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/footer.min.js?ver=3.5.0',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-includes/js/wp-emoji-release.min.js?ver=5.9',
      {
        headers: {
          accept: '*/*',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/K6-logo.png',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/album-1.jpg',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/beanie-2.jpg',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/beanie-with-logo-1.jpg',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/belt-2.jpg',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/cap-2.jpg',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/hoodie-2.jpg',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/hoodie-with-logo-2.jpg',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/hoodie-with-zipper-2.jpg',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/logo-1.jpg',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/long-sleeve-tee-2.jpg',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/polo-2.jpg',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/single-1.jpg',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.post(
      'http://ecommerce.k6.io/?wc-ajax=get_refreshed_fragments',
      {
        time: '1645005395795',
      },
      {
        headers: {
          accept: '*/*',
          'x-requested-with': 'XMLHttpRequest',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          origin: 'http://ecommerce.k6.io',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )
    sleep(0.6)

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/K6-logo.png',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/K6-logo.png',
      {
        headers: {
          accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )
    sleep(6.7)

    response = http.get('http://ecommerce.k6.io/', {
      headers: {
        accept: '*/*',
        'accept-encoding': 'gzip, deflate',
        'accept-language':
          'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
      },
    })

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-includes/css/dist/block-library/style.min.css?ver=5.9',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/vendors-style.css?ver=4.0.0',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/style.css?ver=4.0.0',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/base/gutenberg-blocks.css?ver=3.5.0',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/style.css?ver=3.5.0',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/base/icons.css?ver=3.5.0',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/woocommerce/woocommerce.css?ver=3.5.0',
      {
        headers: {
          accept: 'text/css,*/*;q=0.1',
          'accept-encoding': 'gzip, deflate',
          'accept-language':
            'en-GB,en-US;q=0.9,en;q=0.8,es;q=0.7,nl;q=0.6,de;q=0.5,eo;q=0.4,fr;q=0.3,fil;q=0.2',
        },
      }
    )
  })
}
