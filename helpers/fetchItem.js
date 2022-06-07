const URL_API = (product) => `https://api.mercadolibre.com/items/${product}`;

const fetchItem = async (product) => {
  try {
    const getURL = URL_API(product);
    const responseApi = await fetch(getURL);
    const data = await responseApi.json();
    return data;
  } catch (error) {
    return error;
  }
};

fetchItem('MLB1615760527');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
