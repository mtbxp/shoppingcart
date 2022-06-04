const fetchProducts = async () => {
  //seu código aqui'
  try {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    const response = await fetch(url);
    const data = response.json();
    return data;
  } catch (error) {
    return error;
  }
};
fetchProducts('computador').then((data) => console.log(data));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
