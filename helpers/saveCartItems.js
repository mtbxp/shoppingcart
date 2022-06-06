const saveCartItems = (key, value) => {
  // seu código aqui
  localStorage.setItem(key, value);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
