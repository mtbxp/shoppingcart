const fetchItem = async ($ItemID) => {
  const ID_URL = `https://api.mercadolibre.com/items/${$ItemID}`;
  try {
    const result = await fetch(ID_URL);
    const data = await result.json();
    return data.price;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
