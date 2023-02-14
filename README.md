# Theme Onboarding
Empty files for theme development onboarding.

## Documentation
* [Getting Started](https://shopify.dev/docs/themes/getting-started)
* [Theme File Structure](https://shopify.dev/docs/themes/theme-file-structure)
* [Theme Templates](https://shopify.dev/docs/themes/theme-templates)
* [Liquid](https://shopify.dev/api/liquid)

## To build
### Collection page
* Collection title
* Description (if it exists)
* Image (if it exists)
* List of products with link to the product page
* Pagination

### Product page
* Product title
* Product images
* Description
* Add to cart form ([documentation](https://shopify.dev/api/liquid/tags#form-product))

### Cart page
* Cart title using [locales](https://shopify.dev/themes/architecture/locales/storefront-locale-files#usage)
* Cart form ([documentation](https://shopify.dev/api/liquid/tags#form-cart))
* Ability to update quantity of items
* Ability to remove items from cart
* Ability to checkout

### Header section
* Have a section setting to upload a custom logo to the header ([documentation](https://shopify.dev/themes/architecture/settings/input-settings))
* Have a setting to pick a menu from the Shopify menus
* [Documentation on sections](https://shopify.dev/docs/themes/sections)

### Homepage carousel section
* Use the `{{ content_for_index }}` tag
* Each slide should be built as a block
* Each slide should be able to have a customizable image, title, call to action and link
* You can use [Tiny Slider](https://ganlanyuan.github.io/tiny-slider/) as a carousel library
