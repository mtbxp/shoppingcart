const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Teste se saveCartItems é uma função', () => {
    expect(typeof saveCartItems).toBe('function');
  });
  it('Teste se localStorage.setItem foi chamada', () => {
    const ol = '<ol><li>Item</li></ol>';
    saveCartItems(ol);
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('Teste se localStorage.setItem foi chamada com os elementos corretos', () => {
    const ol = '<ol><li>Item</li></ol>';
    saveCartItems(ol);
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', ol);
  });
  it('Teste se retorna um erro ao achamar a função sem parâmetro', () => {
    const msg = 'You must provide an string';
    const response = saveCartItems();
    expect(response).toEqual(new Error(msg));
  });
});
