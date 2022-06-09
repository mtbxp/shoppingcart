const getSavedCartItems = (arg) => {
    if (arg === undefined) {
      throw new Error('error!');
   }
   return localStorage.getItem(arg);
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}