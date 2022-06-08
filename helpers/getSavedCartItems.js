const getSavedCartItems = (cartItem) => {
  // seu código aqui
  const listString = localStorage.getItem(`${cartItem}`);
  const listObj = JSON.parse(listString);
  return listObj;
};  

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
