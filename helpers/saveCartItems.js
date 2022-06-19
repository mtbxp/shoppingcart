const saveCartItems = (item) => {
  const arrlist = [];
  const result = JSON.parse(localStorage.getItem('cartItems'));
  if (result) { 
    result.push(JSON.parse(item));
    localStorage.setItem('cartItems', JSON.stringify(result));
  } else {
    arrlist.push(JSON.parse(item));
    localStorage.setItem('cartItems', JSON.stringify(arrlist));
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
