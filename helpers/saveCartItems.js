const saveCartItems = (items) => {
  localStorage.setItem('listOfItems', items);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
