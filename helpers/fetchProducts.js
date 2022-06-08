const fetchProducts = async (e) => {
  // seu código aqui
  if (e === 'computador') {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${e}`;
    const result = await fetch(url)
      .then((response) => response.json())
      .then((data) => data);
    // const sku = result.map((esku) => esku.id);
    // const name = result.map((ename) => ename.title);
    // const image = result.map((eimage) => eimage.thumbnail);
    // const items = [];
    // for (let i = 0; i < sku.length; i += 1) {
    //   items.push({ sku: sku[i], name: name[i], image: image[i] });
    // }
    return result;
  }
  throw new Error('You must provide an url');
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
