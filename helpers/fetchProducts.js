const fetchProducts = async (QUERY) => {
  // seu código aqui
  if (QUERY === undefined) return new Error('You must provide an url');
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  const response = await fetch(url);
  const result = await response.json();
  const itens = result.results;
  return itens;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
