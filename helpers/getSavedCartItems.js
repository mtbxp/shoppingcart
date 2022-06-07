const getSavedCartItems = (strKey) => 
  // seu código aqui
   localStorage.getItem(strKey);
if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
