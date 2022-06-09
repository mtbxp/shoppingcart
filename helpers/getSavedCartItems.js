const getSavedCartItems = () => {
  const savedItems = JSON.parse(localStorage.getItem('cartItems'));
  const myCart = document.querySelector('.cart__items');

 savedItems.forEach(({ id, title, price }) => myCart
 .appendChild(createCartItemElement({
   sku: id,
  name: title,
  salePrice: price,
})));
 
 console.log(savedItems);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
