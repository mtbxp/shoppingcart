const getSavedCartItems = (itemsCart) => {
  //  localStorage.getItem('cartItems');
   const findItems = document.querySelector('.cart__items');
   const information = JSON.parse(localStorage.getItem('cartItems'));
   if (information) {
     information.forEach((element) => {
       const currentItem = itemsCart(element);
       findItems.appendChild(currentItem);
     });
   }
  };
  // const elementClass = document.querySelector('.cart__items');
  // // const storageLocal = localStorage.getItem('cartItems');
  // elementClass.innerText = localStorage.getItem('cartItems');

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
