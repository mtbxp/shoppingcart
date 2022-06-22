const fetchProducts = async (product) => {
  if (typeof product === 'undefined') return (new Error('You must provide an url'));

  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
  const promise = await fetch(url);
  const result = await promise.json();
//  console.log(result);
  return (result);
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
