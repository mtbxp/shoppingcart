const saveCartItems = (clickedItem) => {
   // Ao receber dados de um servidor web, os dados são sempre uma string. Analise os dados com JSON.parse() e os dados se tornam um objeto JavaScript(www.w3schools.com/js/js_json_parse.asp)
  // LS = Local Storage
  // console.log(clickedItem);
  // const itemsSavedInLS = localStorage.getItem('cartItems');
  const itemsToSaveInLS = 0; /* itemsSavedInLS === null ? [clickedItem] 
  : itemsSavedInLS.concat(clickedItem); */

  // O método JSON.stringify() converte valores em javascript para uma String  JSON. 
  // developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
  localStorage.setItem('cartItems', itemsToSaveInLS);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
