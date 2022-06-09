const getSavedCartItems = () => {
  // const dataStringify = await localStorage.getItem('cartItems');
  // if (dataStringify) {
  //   const data = await JSON.parse(dataStringify);
  //   return data;
  // }
  const data = localStorage.getItem('cartItems');
  const finalData = JSON.parse(data);
  return finalData;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
