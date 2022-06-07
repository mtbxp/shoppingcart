const fetchProducts = async (item) => {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${item}`);
    const data = await response.json();
    const newData = data.results.map((get) => {
      const result = {
        sku: get.id,
        name: get.title,
        image: get.thumbnail,
      };
      return result;
    });
    return newData;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
