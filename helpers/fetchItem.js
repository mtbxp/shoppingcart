const fetchItem = async (productId) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${productId}`;
  try {
    const response = await fetch(url);
    const product = await response.json();
    return product;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
