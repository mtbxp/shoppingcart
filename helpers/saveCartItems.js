const saveCartItems = (mens) => {
  const parm = [];
  parm.push(mens);
  console.log(parm);
  localStorage.setItem('cartItems', parm);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
