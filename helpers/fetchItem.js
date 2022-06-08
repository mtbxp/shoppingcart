const urlItem = ($ItemID) => `https://api.mercadolibre.com/items/${$ItemID}`;

const fetchItem = async (ItemID) => {
  try {
    const response = await fetch(urlItem(ItemID));
    const info = await response.json();
    return info;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
