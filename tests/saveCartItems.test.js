const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test('com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', async () => {
    const test = saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  test(`com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois
    parâmetros, sendo o primeiro 'cartItems' e o segundo sendo o valor passado como argumento
    para saveCartItems.`, () => {
      saveCartItems('<ol><li>Item</li></ol>');
      expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', JSON.stringify('<ol><li>Item</li></ol>'));
  });
/*   test(`sem argumento, retorna um erro com a mensagem: 'You must provide 
  an url'.`, () => {
    const errorM = 'You must provide an url';
    expect(saveCartItems()).toEqual(new Error(errorM));
  }); */
});