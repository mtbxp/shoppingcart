const BASE_URL = 'https://api.mercadolibre.com';
const createUrlToGetProductItem = (productId) => `${BASE_URL}/items/${productId}`;

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
