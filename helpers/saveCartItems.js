const saveCartItems = (obj, array) => {
  // seu código aqui
  if (obj !== undefined && array !== undefined) {
    const myObjString = (obj);
    array.push(myObjString);
    localStorage.setItem('cartItems', JSON.stringify(array));
  }
  // localStorage.clear();
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
