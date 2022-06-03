const fetchProducts = async (query) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
    const resonse = await fetch(url);
    const data = await resonse.json();
    // console.log(data);
    return data;
  } catch (err) {
    // console.log(err);
    return new Error('You must provide an url');
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
