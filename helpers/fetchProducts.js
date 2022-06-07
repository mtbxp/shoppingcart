const fetchProducts = async (ItemID) => {
  try {
  const site = `https://api.mercadolibre.com/sites/MLB/search?q=${ItemID}`;

  const response = await fetch(site);
  const information = await response.json();
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
