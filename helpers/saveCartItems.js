const saveCartItems = (olList) => {
  // seu código aqui
  try {
    const listSave = [];
    olList.childNodes.forEach((element) => listSave.push(element.innerText));
    const listSaveString = JSON.stringify(listSave);
    localStorage.setItem('cartItems', listSaveString);
  } catch (error) {
    return (error);
  }
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
