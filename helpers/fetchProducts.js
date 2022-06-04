const BASE_URL = 'https://api.mercadolibre.com';
const createUrlToGetProductsList = (queryTerm) => `${BASE_URL}/sites/MLB/search?q=${queryTerm}`;

const fetchProducts = async (queryTerm) => {
  const url = createUrlToGetProductsList(queryTerm);
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
    createUrlToGetProductsList,
  };
}
