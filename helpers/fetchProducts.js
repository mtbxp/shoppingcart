const fetchProducts = async (produto) => {
  if (!produto) {
    return Promise.reject(new Error('You must provide an url'));
  }
  const reponse = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${produto}`);
  const data = await reponse.json();
  return data;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
fetchProducts('computador').then((data) => console.log(data.results));