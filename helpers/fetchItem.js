const fetchItem = async (endpoint) => {
  const url = `https://api.mercadolibre.com/items/${endpoint}`;

  const product = await fetch(url)
    .then((response) => response.json())
    .catch((error) => error);

  return product;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
