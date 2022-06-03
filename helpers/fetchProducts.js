const fetchProducts = async (product) => {
  if (product && typeof product !== 'string') throw new Error('O parâmetro deve ser uma string');
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
