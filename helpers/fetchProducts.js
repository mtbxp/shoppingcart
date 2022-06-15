const fetchProducts = async (endpoint) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${endpoint}`;
    const response = await fetch(url);
    const data = await response.json();
      return data;
  } catch (error) {
    return error;
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}

// const fetchProducts = async (computador) => {
//   // seu código aqui
//   try {
//     const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${computador}`;
//     const response = await fetch(endpoint);
//     const data = response.json();
//     // console.log(response);
//     return data;
//   } catch (error) {
//     return error;
//   }
// };
// // fetchProducts();
// // fetchProducts('computador').then((data) => console.log(data));

// if (typeof module !== 'undefined') {
//   module.exports = {
//     fetchProducts,
//   };
// }
