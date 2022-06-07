const saveCartItems = (mens) => {
  const parm = [];
  parm.push(mens);
  localStorage.setItem('cartItems', parm);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
