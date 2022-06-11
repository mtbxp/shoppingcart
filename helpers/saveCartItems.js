const saveCartItems = (productList) => {
  const elementsList = productList.children;
  // Para '[...elementsList]' foi consultado o StackOverflow (https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array)
  const elementsArray = [...elementsList];
  console.log(elementsArray);
  // Para a 'const data' foi consultado o StackOverflow (https://stackoverflow.com/questions/10396074/remove-specific-characters-from-a-string-in-javascript) e as documentações no MDN (https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split) e (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
  const data = elementsArray.map((e) => e.innerText).reduce((arrayObj, element) => {
    const splitInfo = element.split(' | ');
    const obj = splitInfo.reduce((acc, entry, index) => {
      const value = entry.split(': ');
      const keys = ['id', 'title', 'price'];
      return ({ ...acc, [keys[index]]: value[1].replace('$', '') });
    }, {});
    return [...arrayObj, obj];
  }, []);
  return localStorage.setItem('cartItems', JSON.stringify(data));
};

// console.log(saveCartItems('<ol><li>Item</li></ol>'));

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
