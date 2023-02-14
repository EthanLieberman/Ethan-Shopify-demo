export default {
  name: "ProductForm",
  data() {
    return {
      product: null,
      options: [null, null, null],
      option1: null,
      option2: null,
      option3: null,
      quantity: "1",
      quickAdd: false,
    };
  },
  props: {
    handle: String,
  },
  created() {
    this.getProduct();
  },

  mounted() {
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.info-card') && !event.target.closest('.quick-add-btn')) {
        this.QuickAddLeave();
      }
    });
  },

  methods: {
    getProduct() {
      var cartContents = fetch(`/products/${this.handle}.js`)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data)
          this.product = data;
        })
        .catch((err) => console.log(err));
      },
    
    async addToCart() {
      if (this.firstAvailableVariant) {
        const { id } = this.firstAvailableVariant;

        const cartContents = await fetch("/cart/add.js", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: [
              {
                id: `${id}`,
                quantity: Number(this.quantity),
              },
            ],
          }),
        });
        const response = await cartContents.json();
        const event = new CustomEvent('updateEvent');
        document.dispatchEvent(event);
      }
      },

    QuickAdd() {
    this.quickAdd = true;
      },

    QuickAddLeave() {
      this.quickAdd = false;
    },

    optionChange(index, value) {
    Vue.set(this.options, [index - 1], value);
      },

  },

  computed: {
    /**
     * Returns an array of variants that match the selected options
     *
     * @returns {Array<object>} Array of variant objects
     */
    selectedVariants() {
      return this.product.variants.filter((variant) => {
        return (
          variant.option1 == this.options[0] &&
          variant.option2 == this.options[1] &&
          variant.option3 == this.options[2]
        );
      });
    },

    /**
     * First available variant in the list of selected variants
     *
     * @returns {object} Variant
     */
    firstAvailableVariant() {
      const availableVariants = this.selectedVariants.filter(({ available }) => available);

      if (availableVariants.length) {
        return availableVariants[0];
      }

      return null;
    },

    /**
     * Render the copy for the add to cart button
     */
    addToCartText() {
      return this.firstAvailableVariant ? 'Add' : 'Out of stock';
    },

  },
};