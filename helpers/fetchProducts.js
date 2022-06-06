const fetchProducts = async () => {
  // seu código aqui
  const query = 'computador';
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(endpoint);
  const final = await response.json();
  console.log(final);
};

// createProductItemElement();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
