const fetchItem = async (ItemID) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${ItemID}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
