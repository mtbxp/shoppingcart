const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {

  it('argumento <ol><li>Item</li></ol> e teste se localStorage.setItem foi chamada', () => {
    const expected =  saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  });

  it('argumento <ol><li>Item</li></ol> e teste se localStorage.setItem foi chamada com paramentros', () => {
    const expected =  saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
  });
  
});
