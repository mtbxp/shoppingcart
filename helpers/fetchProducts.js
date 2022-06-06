const fetchProducts = async (produto) => {
  if (produto === undefined) {
    produto = "computador"
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${produto}`;
  const response = await fetch(url);
  return response.json();
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
