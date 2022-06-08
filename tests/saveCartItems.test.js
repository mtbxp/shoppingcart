const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // it('saveCartItems é uma função', () => {
  //   expect(typeof saveCartItems).toBe('function');
  //   });

  it('a função localStorage foi chamada', () => {
    saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
    });

  it('a função localStorage foi chamada com os parâmetros corretos', () => {
      saveCartItems('<ol><li>Item</li></ol>');
      expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
 });

  // it('sem argumento, lança um erro', async () => {
  //       expect(saveCartItems()).toEqual(new Error ('You must provide an url'))
  // });
});
