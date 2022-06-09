const saveCartItems = () => {
  console.log('<ol><li>Item</li></ol>');
};
saveCartItems('<ol><li>Item</li></ol>');

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
