const fetchItem = async (ItemId) => {
  try {
    const URL = `https://api.mercadolibre.com/items/${ItemId}`;
    const result = await fetch(URL);
    const data = await result.json();
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