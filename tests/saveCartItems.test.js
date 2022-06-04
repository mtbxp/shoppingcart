const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Should call localStorage.setItem when saveCartItems(\'<ol><li>Item</li></ol>\') is called', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
  })

  it('Should call localStorage.setItem with two params, \'cartItems\' and the same as saveCartItems when saveCartItems(\'<ol><li>Item</li></ol>\') is called', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toBeCalledWith('cartItems','<ol><li>Item</li></ol>');
  })

  it('Should return new Error (\'Occorreu um erro. :c\') when saveCartItems(\'\') is called.', async () => {
    expect(await saveCartItems('')).toEqual(new Error('Occorreu um erro. :c'));
  });

  it('Should return function when typeof saveCartItems is called.', () => {
    expect(typeof saveCartItems).toBe('function');
  });
});
