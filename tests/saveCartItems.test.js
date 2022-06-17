const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Quando executada com argumento \'<ol><li>Item</li></ol>\' o método localStorage é chamado', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect((localStorage.setItem)).toHaveBeenCalled();
  });
  it('Quando executada com argumento \'<ol><li>Item</li></ol>\' o método localStorage é chamado com os parametros \'cartItems\' e com o valor passado como argumento para saveCartItems', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect((localStorage.setItem)).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
});
