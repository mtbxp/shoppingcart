const getItemUrl = (query) => `https://api.mercadolibre.com/items/${query}`;
const fetchItem = async (search) => {
  if (search) {
    const url = getItemUrl(search);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }
  throw new Error('You must provide an url');
};
fetchItem('MLB1615760527');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
