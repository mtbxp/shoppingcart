const saveCartItems = (arr) => {
  const parm = JSON.stringify(arr);
  localStorage.setItem('cartItems', parm);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
