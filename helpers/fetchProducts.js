const fetchProducts = async (productToBeFetched) => {
  if (productToBeFetched !== 'computador') {
    return null;
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${productToBeFetched}`;
  try {
    const request = await fetch(url);
    const data = await request.json();
    return data;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
