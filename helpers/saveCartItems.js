const saveCartItems = async (itemElem) => { 
  const mainList = JSON.parse(localStorage.getItem('cartItems') || '[]');
  const element = await fetchItem(itemElem);
  const { id, title, price } = element;
  
  mainList.push({ id, title, price });
  localStorage.setItem('cartItems', JSON.stringify(mainList));

  console.log(mainList); 
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
