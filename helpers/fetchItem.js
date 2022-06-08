const fetchItem = async (param) => {
  // seu código aqui
  const url = `https://api.mercadolibre.com/items/${param}`;
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  const obj = {
    sku: data.id,
    name: data.title,
    salePrice: data.price,
  };
  //  console.log(obj);
  return obj;
};
fetchItem();

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
