const fetchItem = async (item) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${item}`);
    const data = await response.json();
    const dataList = [data].map((get) => {
      //  https://stackoverflow.com/questions/30803168/data-map-is-not-a-function
      const resultList = {
        sku: get.id,
        name: get.title,
        salePrice: get.price,
      };
      return resultList;
    });
    return dataList;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
