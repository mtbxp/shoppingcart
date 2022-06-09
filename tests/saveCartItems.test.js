const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {

  it('test if fectchProducts is a function', () => {
    const actual = '<ol><li>Item</li></ol>';
    saveCartItems(actual);
    expect(localStorage.setItem).toHaveBeenCalled();
  })

  it('test if fectchProducts is a function', () => {
    const actual = '<ol><li>Item</li></ol>';
    saveCartItems(actual);
    expect(localStorage.setItem).toHaveBeenCalledWith(localStorageSimulator(cartItems, actual));
  })

  // it('se a função não tiver parâmetro, retorn um erro', () => {
  //   const actual = fetchItem();
  //   expect(actual).toEqual(new Error('mensagem esperada aqui'));
  // })
});
