import { check, group, sleep } from 'k6'
import http from 'k6/http'
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";
import { FormData } from 'https://jslib.k6.io/formdata/0.0.2/index.js'

let productSelected;

// export const options = {
//     vus: 2,
//     duration: '3m',
// }

export default function () {
    ViewProduct();
    AddToCart();
}

export function ViewProduct () {
    let productList = ['album', 'beanie', 'beanie-with-logo'];
    // console.log('productList = ', productList);
    
    let rand = Math.floor(Math.random() * productList.length);
    productSelected = productList[rand];
    let response = http.get('http://ecommerce.test.k6.io/product/' + productSelected, {
        tags: { name: 'ProductPage'},
    });
    check(response, {
        'page_ViewProduct accessed': (r) => r.body.includes('Add to cart')
    })
    sleep(randomIntBetween(3,5));
}



export function AddToCart() {
  let formData, response

  group('page_Product', function () {
    formData = new FormData()
    formData.boundary = '----WebKitFormBoundaryGfAy3jPKJCTwO0AI'
    formData.append('quantity', '1')
    formData.append('add-to-cart', '16')

    response = http.post('http://ecommerce.test.k6.io/product/' + productSelected, formData.body(), {
      headers: {
        'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryGfAy3jPKJCTwO0AI',
        dnt: '1',
        origin: 'http://ecommerce.test.k6.io',
        'upgrade-insecure-requests': '1',
      },
    })
    check(response, {
        'AddToCart successful': (r) => r.body.includes('has been added to your cart.')
    })
    sleep(randomIntBetween(1,2));

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-includes/css/dist/block-library/style.min.css?ver=6.1.1',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/vendors-style.css?ver=4.0.0',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/packages/woocommerce-blocks/build/style.css?ver=4.0.0',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/base/gutenberg-blocks.css?ver=3.5.0',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-includes/css/classic-themes.min.css?ver=1',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-includes/js/wp-emoji-release.min.js?ver=6.1.1',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/css/photoswipe/photoswipe.min.css?ver=5.0.3',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/css/photoswipe/default-skin/default-skin.min.css?ver=5.0.3',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/style.css?ver=3.5.0',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/base/icons.css?ver=3.5.0',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/css/woocommerce/woocommerce.css?ver=3.5.0',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-includes/js/jquery/jquery.min.js?ver=3.6.1',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/K6-logo.png',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/jquery-blockui/jquery.blockUI.min.js?ver=2.70',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/add-to-cart.min.js?ver=5.0.3',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/zoom/jquery.zoom.min.js?ver=1.7.21',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/flexslider/jquery.flexslider.min.js?ver=2.7.2',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/photoswipe/photoswipe.min.js?ver=4.1.1',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/photoswipe/photoswipe-ui-default.min.js?ver=4.1.1',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/single-product.min.js?ver=5.0.3',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/js-cookie/js.cookie.min.js?ver=2.1.4',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/woocommerce.min.js?ver=5.0.3',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/cart-fragments.min.js?ver=5.0.3',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/navigation.min.js?ver=3.5.0',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/skip-link-focus-fix.min.js?ver=20130115',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-includes/js/comment-reply.min.js?ver=6.1.1',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/vendor/pep.min.js?ver=0.4.3',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/woocommerce/header-cart.min.js?ver=3.5.0',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/footer.min.js?ver=3.5.0',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/js/sticky-add-to-cart.min.js?ver=3.5.0',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/fonts/fa-solid-900.woff2',
      {
        headers: {
          dnt: '1',
          origin: 'http://ecommerce.test.k6.io',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/beanie-2.jpg',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/belt-2.jpg',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/cap-2.jpg',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/beanie-with-logo-1.jpg',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/sunglasses-2.jpg',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.post(
      'http://ecommerce.test.k6.io/?wc-ajax=get_refreshed_fragments',
      {
        time: '1674821184507',
      },
      {
        headers: {
          accept: '*/*',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          dnt: '1',
          'x-requested-with': 'XMLHttpRequest',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/K6-logo.png',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/uploads/2021/02/K6-logo.png',
      {
        headers: {
          dnt: '1',
        },
      }
    )
  })
}
