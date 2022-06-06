const fetchProducts = async (product) => {
  if (!product) throw new Error('You must provide an url');
  
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
  } catch (error) {
    throw new Error('You must provide an url');
    }
  };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}