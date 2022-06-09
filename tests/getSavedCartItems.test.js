const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {

  it('test if fectchProducts is a function', () => {
    expect(getSavedCartItems()).toHaveBeenCalledWith(localStorage.getItem);
  })

  it('test if fectchProducts is a function', () => {
    expect(getSavedCartItems()).toHaveBeenCalledWith(localStorage.getItem(cartItems));
  })

  // it('se a função não tiver parâmetro, retorn um erro', () => {
  //   const actual = fetch();
  //   expect(actual).toEqual(new Error('mensagem esperada aqui'));
  // })
});
