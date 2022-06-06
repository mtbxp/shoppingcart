const fetchItem = async (ItemID) => {
  if (!ItemID) {
    throw new Error('You must provide an url');
  }
  const url = `https://api.mercadolibre.com/items/${ItemID}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

console.log(fetchItem('MLB1615760527'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
