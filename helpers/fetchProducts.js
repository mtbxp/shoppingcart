const fetchProducts = async (product) => {
  try {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${product}`);
  const result = await response.json();
  // const data = await result.json();
  // console.log(data);
  return result;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
