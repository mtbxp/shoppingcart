const getSavedCartItems = (arg) => {
    localStorage.getItem('CartItems');
    if (arg === undefined) {
      throw new Error('error!');
   }
};
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}