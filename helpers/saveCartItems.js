const saveCartItems = (list) => {
  try {
    const itemsToSave = [];
    list.childNodes.forEach((child) => itemsToSave.push(child.innerText));
    localStorage.setItem('cartItems', JSON.stringify(itemsToSave));
  } catch (err) {
    return new Error(`Um erro ocorreu. :c\n${err}`);
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
