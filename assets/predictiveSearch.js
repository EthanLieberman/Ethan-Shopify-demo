export default {
  name: "PredictiveSearch",
  data() {
    return {
      message: 'Hello Vue!',
      searchQuery: null,
      searchResults: null,
    };
  },
  methods: {
    getResults() {
      fetch(`/search/suggest.json?q=${this.searchQuery}&resources[type]=product&resources[limit]=3`)
      .then((response) => response.json())
      .then((data) => this.searchResults = data.resources.results.products)
      .catch((err) => console.log(err));
    }
  },

  watch: {
    searchQuery() {
      if (this.searchQuery != "") {
        this.getResults()
      }
    }
  }

};