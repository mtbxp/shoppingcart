const getSavedCartItems = (cartItem) => {
  try {
    const listString = localStorage.getItem(`${cartItem}`);
    const listObj = JSON.parse(listString);
    return listObj;
  } catch (error) {
    return (error);
  }
};  

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
