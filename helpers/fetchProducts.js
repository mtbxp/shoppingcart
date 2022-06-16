const fetchProducts = async (item) => {
  // const wantedUrl = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  // if (item === undefined) {
  //   return new Error('You must provide an url');
  // }
  // const wantedData = await fetch(wantedUrl);
  //   const results = await wantedData.json();
  // return results;

  const wantedUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  try {
    const wantedData = await fetch(wantedUrl);
    const results = await wantedData.json();
    return results;
  } catch (error) {
  return error; 
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}