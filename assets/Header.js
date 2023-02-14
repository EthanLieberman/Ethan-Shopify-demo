const time = new Date;
const Flyout = () => import('./Flyout.js?v=' + time.getTime());
const PredictiveSearch = () => import('./PredictiveSearch.js?v=' + time.getTime());

const app = new Vue({
  name: "Header",
  components: {
    PredictiveSearch,
    Flyout
  },
  el: '#VHeader',
  delimiters: ['${', '}'],
  data() {
    return {
      message: 'Hello Vue!',
      cartFlyout: false,
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
});