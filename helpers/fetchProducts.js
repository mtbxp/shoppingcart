const creatUrl = (urlInfo) => `https://api.mercadolibre.com/sites/MLB/search?q=${urlInfo}`;

const fetchProducts = async (urlKey) => {
  if (urlKey === undefined) return new Error('You must provide an url.');
  const response = await fetch(creatUrl(urlKey));
  const data = await response.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
