const saveCartItems = (olList) => {
    const listSave = [];
    olList.childNodes.forEach((element) => listSave.push(element.innerText));
    localStorage.setItem('cartItems', JSON.stringify(listSave));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
