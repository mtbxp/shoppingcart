const fetchProducts = async ($QUERY) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${$QUERY}`;
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (erro) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
