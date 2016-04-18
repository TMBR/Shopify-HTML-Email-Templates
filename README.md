## Responsive HTML Email Templates for Shopify - Gulp Inline css tool and SCSS
##### Modified for GULP inline task and scss from @Cam @ Elkfox.com, HTML Shopify Templates https://github.com/Cam/Shopify-HTML-Email-Templates

### Templates for all 'customer facing' emails:

* Abandoned Checkout Notification	- Sent to a potential customer who has abandoned their checkout
* Customer Account Activation - Sent to customer with information on how to activate their account
* Customer Account Welcome - Sent to customer when they activate their account
* Customer Password Reset	- Sent to customer when they wish to reset their password
* Gift Card Notification - Sent to the customer when a gift card is created
* Order Cancelled	- Sent to the customer when an order is cancelled
* Order Confirmation - Sent to the customer when an order is created
* Refund Notification	- Sent to the customer when their order is refunded
* Shipping confirmation - Sent to the customer when an order is shipped
* Shipping update	- Sent to the customer when an order's shipping information is updated

### Get started
CD to the local directory where this repo has been cloned, then run
```
$ npm install
```

When your ready to build the inline css HTML templates run.
```
$ gulp
```

You will then need to copy and paste the .HTML found in the "build" folder for each template into shopify. https://YOUR-SITE-NAME.myshopify.com/admin/settings/notifications

The files in your local /build folder should match the templates in shopify. Pick the template you want to replace - go to the HTML tab and paste in the .HTML from your local build.

![alt text](https://cldup.com/gXw3Zl0Wfn.jpg "Shopify Email notice admin")


#### Theme assumptions :
* logo.png in your assets folder
