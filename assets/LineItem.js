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

export default {
  name: 'LineItem',
  props: {
    item: Object,
    handle: String
  }
}