const fetchProducts = async () => {
  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=$QUERY';

  await fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => `Algo deu errado :( \n${error}`);
};

fetchProducts();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
