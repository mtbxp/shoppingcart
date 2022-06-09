const saveCartItems = (param) => {
  if (localStorage.getItem('list') === null) {
    localStorage.setItem('list', '[]');
  }

  const array = JSON.parse(localStorage.getItem('list'));
  array.push(param);

  const arrayString = JSON.stringify(array);
  localStorage.setItem('list', arrayString); 
};
// const get = () => {
//   if (localStorage.getItem('key') !== null) {
//     const carrinho = (JSON.parse(localStorage.getItem('key')));
//     const { sku, name, salesPrice } = carrinho;
//     createCartItemElement(sku, name, salesPrice);
//   }
// };

if (typeof module !== 'undefined') {
  module.exports = { saveCartItems };
}
