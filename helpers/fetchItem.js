const fetchItem = async (ItemID) => {
  // seu código aqui
  const urlSearchForProduct = `https://api.mercadolibre.com/items/${ItemID}`;
  const productId = await fetch(urlSearchForProduct);
  const data = await productId.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
