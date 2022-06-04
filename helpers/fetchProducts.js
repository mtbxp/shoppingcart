const getUrl = (QUERY) => `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;

const fetchProducts = async (product) => {
const url = getUrl(product);
const result = await fetch(url);
const data = await result.json();

// return console.log(resultData);
// resultData.forEach((element) => console.log(element));
};
// console.log(fetchProducts('computador').then((data) => data));
fetchProducts('computador').then((data) => console.log(data));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
