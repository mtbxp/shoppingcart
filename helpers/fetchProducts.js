const fetchProducts = async (query) => {
  // seu código aqui
  // const query = 'computador';
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const response = await fetch(endpoint);
  const final = await response.json();
  return final;
  // console.log(final);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
