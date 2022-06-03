const fetchProducts = async (search) => {
  // seu código aqui
  if (search === undefined) {
    throw new Error('You must provide an url');
  }
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${search}`;
  const result = await fetch(url);
  const data = await result.json();
  console.log(data.results);
  return data;
};

// fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
