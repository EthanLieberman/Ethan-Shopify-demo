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
  name: "RelatedProducts",
  components: {
    ProductForm,
  },
  el: '#VRelatedProducts',
  delimiters: ['${', '}'],
  data() {
    return {
      message: 'Hello Product!',
      relatedProducts: [],
    };
  },

  // created() {
  //   this.getRelated();
  // },

  mounted() {
    const options = {
      rootMargin: '50px',
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.getRelated();
          observer.unobserve(this.$el);
        }
      });
    }, options);

    observer.observe(this.$el);
  },

  methods: {
    getRelated() {
      console.log('Get related');
      const path = window.location.pathname;
      const arr = path.split("/");
      const handle = arr[arr.length - 1];

      fetch(`/products/${handle}.js`)
      .then(res => res.json())
      .then(data => {
        
        fetch(`/recommendations/products.json?product_id=${data.id}&limit=3`)
        .then(res => res.json())
        .then(data => this.relatedProducts = data.products)
        .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
    },
  },

});
