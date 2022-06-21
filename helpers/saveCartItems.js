const saveCartItems = (clickedItem) => {
   // Ao receber dados de um servidor web, os dados são sempre uma string. Analise os dados com JSON.parse() e os dados se tornam um objeto JavaScript(www.w3schools.com/js/js_json_parse.asp)
  // LS = Local Storage
  // console.log(clickedItem);
  const itemsSavedInLS = JSON.parse(localStorage.getItem('cartItems'));
  let itemsToSaveInLS = [];
  if (itemsSavedInLS === null) {
    itemsToSaveInLS.push(clickedItem);
  } else {
    itemsSavedInLS.push(clickedItem);
    itemsToSaveInLS = itemsSavedInLS;
  }

  // O método JSON.stringify() converte valores em javascript para uma String  JSON. 
  // developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
  localStorage.setItem('cartItems', JSON.stringify(itemsToSaveInLS));
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
