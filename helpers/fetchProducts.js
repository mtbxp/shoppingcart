const fetchProducts = async (elmentSearch) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${elmentSearch}`;
  if (!elmentSearch) { throw new Error('You must provide an url'); }

  const promise = await fetch(url);
  promise.then((elm) => elm.json())
    .then((env) => env.results);  
  return promise;
};

/* console.log(fetchProducts('computador')); */

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
