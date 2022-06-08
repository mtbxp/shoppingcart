// const itemArray = [];

const saveCartItems = (item) => {
  // itemArray.push(item);
  // localStorage.setItem('cartItems', JSON.stringify(itemArray));
  // const lis = document.querySelector('.cart__items').innerHTML;
  localStorage.setItem('cartItems', item);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}

// const lis = document.querySelector('.cart__items').innerHTML;
// const itemsCart = JSON.stringify(lis);
// localStorage.setItem('cartItems', itemsCart);
// console.log(saveCartItems())