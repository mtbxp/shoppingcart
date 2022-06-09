const creatUrl = (products) => `https://api.mercadolibre.com/sites/MLB/search?q=${products}`;

const fetchProducts = async (products) => {
  if (products === undefined) return new Error('You must provide an url.');
  const response = await fetch(creatUrl(products));
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
