const time = new Date;
const Cart = () => import('./Cart.js?v=' + time.getTime())

const app = new Vue({
  name: "Cart Page",
  components: {
    Cart
  },
  el: '#VCartPage',
  delimiters: ['${', '}'],
  data() {
    return {
      message: 'Hello Vue!',
    };
  },
});