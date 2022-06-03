const getUrl = (QUERY) => `https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`;

const fetchProducts = async (product) => {
const url = getUrl(product);
const result = await fetch(url);
const data = await result.json();
const objectData = data.results;
const returnData = objectData.map((element) => element);
const object = returnData.foreach((element) => element);
// const { id: sku, title: name, thumbnail: image } = object;
// const { id: sku, title: name, thumbnail: image } = objectData;
// const resultObject = objectData.forEach((element) => element);
return console.log(object);
/* const { id: sku, title: name, thumbnail: image } = resultObject;
return {
  sku,
  name,
  image,
}; */
};

// console.log(fetchProducts('computador').then((data) => data));
fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
