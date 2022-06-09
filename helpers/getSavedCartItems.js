const getSavedCartItems = () => {
  // seu código aqui
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}

// const get = () => {
//   if (localStorage.getItem('list') !== null) {
//     const carrinho = JSON.parse(localStorage.getItem('list'));
//     carrinho.forEach((element) => {
//       const a = JSON.parse(element)
//       console.log(a.SKU)
//     })
//     // createCartItemElement(carrinho);
    
//   }
// };