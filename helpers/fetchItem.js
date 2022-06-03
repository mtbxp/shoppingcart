const fetchItem = async (itemID) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${itemID}`;
  const response = fetch(url);
  const objResponse = (await response).json();
  const { id, title, price } = await objResponse;
    const objInfo = { sku: id, name: title, salePrice: price };
  return objInfo;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
