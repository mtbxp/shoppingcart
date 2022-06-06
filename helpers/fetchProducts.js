/* const listProd = (data) => {
  data.results.map((item) => {
    const res = {
      id: item.id,
      title: item.title,
    };
    return res;
  });
}; */

/* const fetchProducts = async (item) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;

  try {
    const result = await fetch(url);
    const data = await result.json();
    const res = [];
    data.results.map((el) => {
      const { id, title, price } = el;
      res.push({ id, title, price });
    });
    console.log(res);
  } catch (error) {
    throw new Error('You must provide an url');
  }
}; */

const fetchProducts = async (item) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;

  try {
    const result = await fetch(url);
    const data = await result.json();
    return data;
  } catch (error) {
    return new Error('You must provide an url');
  }
}; 

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
