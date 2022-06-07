const fetchProducts = async ($QUERY) => {
  if ($QUERY === undefined) {
    return 'You must provide an url';
  } if (typeof $QUERY === 'string') {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
