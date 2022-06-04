const fetchItem = async (item) => {
  const url = `https://api.mercadolibre.com/items/${item}`;
  const result = await fetch(url)
  .then((response) => response.json())
  .then((data) => data)
  .catch((error) => error);
  return result;
};

fetchItem('MLB1615760527');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
