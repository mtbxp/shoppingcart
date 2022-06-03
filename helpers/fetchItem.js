const fetchItem = async (ItemID) => {
  const endpoint = `https://api.mercadolibre.com/items/${ItemID}`;
  const result = await fetch(endpoint);
  const data = await result.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
