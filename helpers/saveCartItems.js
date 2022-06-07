const saveCartItems = () => {
  // seu código aqui
  const cartItem = document.getElementsByClassName('cart__item');
  const array = [];
  
  for (let index = 0; index < cartItem.length; index += 1) {
   array.push(cartItem[index].innerHTML);
  }
 localStorage.setItem('cartItems', JSON.stringify(array));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
