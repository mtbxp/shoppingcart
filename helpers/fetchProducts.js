const fetchProducts = async () => {
  try {
  const site = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';

  const response = await fetch(site);
  const information = response.json();
  return information;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
