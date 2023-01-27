import { check, group, sleep } from 'k6'
import http from 'k6/http'
import { randomIntBetween } from "https://jslib.k6.io/k6-utils/1.0.0/index.js";

// export const options = {
//     vus: 2,
//     duration: '3m',
// }

export default function () {
    ViewCart();
    Checkout();
}

export function ViewCart() {
  let response

  group('page_Cart - http://ecommerce.test.k6.io/cart/', function () {
    response = http.get('http://ecommerce.test.k6.io/cart/', {
      headers: {
        dnt: '1',
        'upgrade-insecure-requests': '1',
      },
    })
    check(response, {
        'ViewCart page accessed': (r) => r.body.includes('Cart'),
      })
    randomIntBetween(1,2);

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
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/css/select2.css?ver=5.0.3',
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
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/country-select.min.js?ver=5.0.3',
      {
        headers: {
          dnt: '1',
        },
      }
    )
    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/address-i18n.min.js?ver=5.0.3',
      {
        headers: {
          dnt: '1',
        },
      }
    )
    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/cart.min.js?ver=5.0.3',
      {
        headers: {
          dnt: '1',
        },
      }
    )
    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/selectWoo/selectWoo.full.min.js?ver=1.0.6',
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


export function Checkout() {
  let response

  const vars = {}

  group('page_Checkout - http://ecommerce.test.k6.io/checkout/', function () {
    response = http.get('http://ecommerce.test.k6.io/checkout/', {
      headers: {
        dnt: '1',
        'upgrade-insecure-requests': '1',
      },
    })
    check (response, {
        'Billing page loaded': (r) => r.body.includes('Checkout'),
    })

    vars['woocommerce-process-checkout-nonce'] = response
      .html()
      .find('input[name=woocommerce-process-checkout-nonce]')
      .first()
      .attr('value')

    sleep(randomIntBetween(1,3));

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
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/css/select2.css?ver=5.0.3',
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
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/selectWoo/selectWoo.full.min.js?ver=1.0.6',
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
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/country-select.min.js?ver=5.0.3',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/address-i18n.min.js?ver=5.0.3',
      {
        headers: {
          dnt: '1',
        },
      }
    )

    response = http.get(
      'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/checkout.min.js?ver=5.0.3',
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
      'http://ecommerce.test.k6.io/wordpress/wp-content/themes/storefront/assets/fonts/fa-solid-900.woff2',
      {
        headers: {
          dnt: '1',
          origin: 'http://ecommerce.test.k6.io',
        },
      }
    )

    response = http.post(
      'http://ecommerce.test.k6.io/?wc-ajax=update_order_review',
      {
        security: 'b0c0491d2e',
        payment_method: 'cod',
        country: 'US',
        state: 'CO',
        postcode: '',
        city: '',
        address: '',
        address_2: '',
        s_country: 'US',
        s_state: 'CO',
        s_postcode: '',
        s_city: '',
        s_address: '',
        s_address_2: '',
        has_full_address: 'false',
        post_data:
          'billing_first_name=&billing_last_name=&billing_company=&billing_country=US&billing_address_1=&billing_address_2=&billing_city=&billing_state=CO&billing_postcode=&billing_phone=&billing_email=&order_comments=&payment_method=cod&woocommerce-process-checkout-nonce=095a5ec4fa&_wp_http_referer=%2Fcheckout%2F',
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
    
    sleep(randomIntBetween(15, 30));

    response = http.post(
      'http://ecommerce.test.k6.io/?wc-ajax=update_order_review',
      {
        security: 'b0c0491d2e',
        payment_method: 'cod',
        country: 'US',
        state: 'CO',
        postcode: '90210',
        city: 'TestCity',
        address: 'This is a test 11',
        address_2: '',
        s_country: 'US',
        s_state: 'CO',
        s_postcode: '90210',
        s_city: 'TestCity',
        s_address: 'This is a test 11',
        s_address_2: '',
        has_full_address: 'true',
        post_data:
          'billing_first_name=Nicole&billing_last_name=van%20der%20Hoeven&billing_company=&billing_country=US&billing_address_1=This%20is%20a%20test%2011&billing_address_2=&billing_city=TestCity&billing_state=CO&billing_postcode=90210&billing_phone=&billing_email=&order_comments=&payment_method=cod&woocommerce-process-checkout-nonce=095a5ec4fa&_wp_http_referer=%2F%3Fwc-ajax%3Dupdate_order_review',
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
      sleep(randomIntBetween(10,30));

    response = http.post(
      'http://ecommerce.test.k6.io/?wc-ajax=checkout',
      {
        billing_first_name: 'Nicole',
        billing_last_name: 'van der Hoeven',
        billing_company: '',
        billing_country: 'US',
        billing_address_1: 'This is a test 11',
        billing_address_2: '',
        billing_city: 'TestCity',
        billing_state: 'CO',
        billing_postcode: '90210',
        billing_phone: '0312344545',
        billing_email: 'test@gmail.com',
        order_comments: '',
        payment_method: 'cod',
        'woocommerce-process-checkout-nonce': `${vars['woocommerce-process-checkout-nonce']}`,
        _wp_http_referer: '/?wc-ajax=update_order_review',
      },
      {
        headers: {
          accept: 'application/json, text/javascript, */*; q=0.01',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          dnt: '1',
          'x-requested-with': 'XMLHttpRequest',
        },
      }
    )
    sleep(randomIntBetween(3,5));
  })

  group(
    'page_Purchase',
    function () {
      response = http.get(
        'http://ecommerce.test.k6.io/checkout/order-received/24768/?key=wc_order_8oz30RHbuNM8h',
        {
            tags: { name: 'PurchasePage'},
        },
        {
          headers: {
            dnt: '1',
            'upgrade-insecure-requests': '1',
          },
        }
      )
      check (response, {
        'Payment successful': (r) => r.body.includes('Order received'),
      })
        sleep(randomIntBetween(5,10));

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
        'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/css/select2.css?ver=5.0.3',
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
        'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/selectWoo/selectWoo.full.min.js?ver=1.0.6',
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
        'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/country-select.min.js?ver=5.0.3',
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
        'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/address-i18n.min.js?ver=5.0.3',
        {
          headers: {
            dnt: '1',
          },
        }
      )

      response = http.get(
        'http://ecommerce.test.k6.io/wordpress/wp-content/plugins/woocommerce/assets/js/frontend/checkout.min.js?ver=5.0.3',
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

      response = http.post(
        'http://ecommerce.test.k6.io/?wc-ajax=get_refreshed_fragments',
        {
          time: '1674823596447',
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
    }
  )
}
