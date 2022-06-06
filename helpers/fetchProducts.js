const fetchProducts = async (product) => {
  try {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const result = await fetch(url);
  const data = await result.json();
  // const dataResult = { results: data.results };
  // console.log(dataResult);
  return data;
  } catch (error) {
    throw new Error('You must provide an url');
  }
};

fetchProducts('');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
