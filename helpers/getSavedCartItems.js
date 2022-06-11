const getSavedCartItems = (itemsCart) => {
   const findItems = document.querySelector('.cart__items');
   const information = JSON.parse(localStorage.getItem('cartItems'));
   if (information) {
     information.forEach((element) => {
       const currentItem = itemsCart(element);
       findItems.appendChild(currentItem);
     });
   }
  };
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
