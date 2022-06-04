const BASE_URL = 'https://api.mercadolibre.com';
const createUrlToGetProductItem = (productId) => `${BASE_URL}/items/${productId}`;

const fetchItem = async (productId) => {
  const url = createUrlToGetProductItem(productId);
  await fetch(url);
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
    createUrlToGetProductItem,
  };
}
