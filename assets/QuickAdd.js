const time = new Date;
const ProductForm = () => import('./ProductForm.js?v=' + time.getTime());

Vue.filter('money', function (value) {
  if (typeof value !== "number") {
    return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });
  return formatter.format(value / 100)
});

const app = new Vue({
  name: "QuickAdd",
  components: {
    ProductForm,
  },
  el: '#VQuickAdd',
  delimiters: ['${', '}'],
  data() {
    return {
      message: 'Hello Product!',
    };
  },

});
