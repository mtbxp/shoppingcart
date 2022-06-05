const saveCartItems = (card) => {
  const storage = [JSON.parse(localStorage.getItem('cartItems'))];
  if (storage) {
    const array = [...storage, card];
    localStorage.setItem('cartItems', JSON.stringify(array));
    console.log('ok', array);
  } else {
    localStorage.setItem('cartItems', JSON.stringify(card));
  }
  // const array = storage.push(card);
  // console.log(storage);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
