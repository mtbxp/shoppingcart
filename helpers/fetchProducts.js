const fetchProducts = async (product) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    return data.results;
  } catch (error) {
    return new Error('You must provide an url');
  }
};  

// window.onload = fetchProducts;

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
