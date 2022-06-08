const fetchProducts = async () => {
  const QUERY = 'computador';
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;
  await fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data));
};

if (typeof module !== 'undefined') {
  module.exports = {
  fetchProducts,
  };
  } 