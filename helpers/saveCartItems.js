const saveCartItems = (product) => {
  const array = [product];
//   const localstorage = localStorage.getItem('cartItems');
// if (localstorage !== null) {
//   const information = JSON.parse(localstorage);
//   localStorage.setItem('cartItems', JSON.stringify([...information, product]));
//   }
// if (localstorage === null) {
// localStorage.setItem('cartItems', JSON.stringify([product]));
// }
localStorage.setItem('cartItems', array);
// };
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
