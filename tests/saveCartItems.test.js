const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', async () => {
  test('com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  test(`com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois
    parâmetros, sendo o primeiro 'cartItems' e o segundo sendo o valor passado como argumento
    para saveCartItems.`, async () => {
      await saveCartItems('<ol><li>Item</li></ol>');
      expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
  test(`sem argumento, retorna um erro com a mensagem: 'You must provide 
  an url'.`, async () => {
    const errorM = 'You must provide an url';
    expect( async () => { 
      await saveCartItems() 
    }).toThrow(errorM);
  });
});