const fetchItem = async ($ItemID) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${$ItemID}`);
    const result = await response.json();
    return result;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
