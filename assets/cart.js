import LineItem from './LineItem.js';

export default {
  name: "Cart",
  components: {
    LineItem
  },
  data() {
    return {
      message: 'Hello Vue!',
      cart: null,
    };
  },
  created() {
    this.getCart();
  },

  methods: {

    getCart() {
      var cartContents = fetch('/cart.js')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.cart = data
      })
      .catch(err => console.log(err));
    },

    updateCart(variant_id, quantity) {
      // console.log(parseInt(variant_id), parseInt(quantity))
      var cartContents = fetch('/cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: `${variant_id}`,
          quantity: Number(quantity)
        })
      })
      .then(response => response.json())
      .then(data => {
        this.cart = data
        const event = new CustomEvent('updateEvent');
        document.dispatchEvent(event);
      })
      .catch(err => console.log(err))


    },

    removeFromCart(variant_id) {
      var cartContents = fetch('/cart/change.js', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: `${variant_id}`,
          quantity: 0
        })
      })
      .then(response => response.json())
      .then(data => {
        this.cart = data
        const event = new CustomEvent('updateEvent');
        document.dispatchEvent(event);
      })
      .catch(err => console.log(err))


    },
  },

  computed: {
    itemCount() {
      return this.cart.item_count;
    },
  },

  mounted() {
    console.log("mounted");
    document.addEventListener('updateEvent', () => this.getCart());
  },

  // destroyed() {
  //   document.removeEventListener('updateEvent');
  // },
};