const fetchProducts = async (product) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    return new Error('You must provide an url');
  }
};

const info = fetchProducts('computador');
console.log(info);

window.onload = fetchProducts;

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
