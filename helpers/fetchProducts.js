const fetchProducts = async (elmentSearch) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${elmentSearch}`;
  if (!elmentSearch) { throw new Error('You must provide an url'); }

  const promise = await fetch(url);
  const resolveProm = promise.json();
  resolveProm.then((env) => env.results);  
  return resolveProm;
};

/* console.log(fetchProducts('computador')); */

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
