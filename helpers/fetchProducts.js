const fetchProducts = async (product) => {
  if (!product) throw Error('You must provide an url');
  
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const response = await fetch(endpoint);
    const data = await response.json();

    return data;
    // return console.log(list);
    // return console.log(objProduct);
  } catch (error) {
    throw new Error('You must provide an url');
    }
  };

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
  //   const objProduct = await Object(data.results
  //     .reduce((acc, cur) => {
  //       acc.sku = cur.id;
  //       acc.name = cur.title;
  //       acc.image = cur.thumbnail;
  //       return acc;
  // }, [{}]));

    // const list = await Object(data.results)
  // .map((item) => {
  //   const objProducts = { sku: '', name: '', image: '' };
  //   objProducts.sku = item.id;
  //   objProducts.name = item.title;
  //   objProducts.image = item.thumbnail;
  //   return objProducts;
  //   });