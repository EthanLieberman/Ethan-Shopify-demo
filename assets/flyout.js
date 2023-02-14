const time = new Date;
const Cart = () => import('./Cart.js?v=' + time.getTime())

export default {
  name: "Flyout",
  components: {
    Cart
  },
  data() {
    return {
      message: 'Hello Vue!',
      status: false,
    };
  },
  methods: {
    Clicked() {
      if (this.status == false) {
        this.status = true
      }
      else {
        this.status = false
      }
      console.log(this.status)
    }
  },
};