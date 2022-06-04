const ENDPOINT_ITEMS = 'https://api.mercadolibre.com/items';
const createUrlToGetProductItem = (productId) => `${ENDPOINT_ITEMS}/${productId}`;

const fetchItem = async (productId) => {
  const url = createUrlToGetProductItem(productId);
  const response = await fetch(url);
  const productItem = response.json();
  return productItem;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
    createUrlToGetProductItem,
  };
}
