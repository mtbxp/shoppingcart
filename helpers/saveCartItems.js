const saveCartItems = (arg) => {
  localStorage.setItem('CartItems', arg);
    if (arg === undefined) {
      throw new Error('error!');
}
};
if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
