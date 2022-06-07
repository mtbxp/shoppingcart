const fetchItem = async (productId) => {
  // seu código aqui
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
    const data = await response.json();

    return data;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
