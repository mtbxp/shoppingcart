const saveCartItems = () => {
  const lis = document.querySelector('cart__items');
  const itemsCart = JSON.stringify(lis);
  console.log(lis);
  console.log(itemsCart);
  // localStorage.setItem('itemsCartList', lis);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
