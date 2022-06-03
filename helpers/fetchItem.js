const fetchItem = async (productId) => {
  if (productId && typeof productId !== 'string') {
    throw new Error('O parâmetro passado deve ser uma string');
  }
  const response = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
