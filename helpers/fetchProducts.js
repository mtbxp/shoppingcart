const fetchProducts = async (productElement) => {
  // seu código aqui
  const product = productElement;
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const response = await fetch(endpoint);
  const data = await response.json();
  return data.results;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
