const getFetchItemURL = ($ItemID) => `https://api.mercadolibre.com/items/${$ItemID}`;

const fetchItem = async ($ItemID) => {
  try {
    const url = getFetchItemURL($ItemID);
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}