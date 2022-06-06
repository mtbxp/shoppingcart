const saveCartItems = (obj, array) => {
  // seu código aqui
  // const myCart = document.querySelector('.cart__items');
  // console.log('Objeto: ', obj)
  const myObjString = (obj);
  array.push(myObjString);
  localStorage.setItem('cartItems', JSON.stringify(array));
  // console.log('Aray: ', array);
  // console.log('Array no localstorage: ', localStorage.getItem('cartItems'));
  // localStorage.clear();
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
