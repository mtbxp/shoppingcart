const fetchProducts = async (QUERY) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  const products = await fetch(url);
  const data = await products.json();
  return data.results;
};

if (typeof module !== 'undefined') {
  module.exports = {
  fetchProducts,
  };
  } 