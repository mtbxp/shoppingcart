const fetchProducts = async (peca) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${peca}`;
  const response = await fetch(url);
  return response.json();
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
