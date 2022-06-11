const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado', () => {
    const results = getSavedCartItems();
    const expected = localStorage.setItem;
    expected(results).toHaveBeenCalledWith(expected);
  })
  it('Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o "cartItems" como parâmetro', () => {
    const results = getSavedCartItems();
    const expected = localStorage.setItem('cartItems');
    expected(results).toHaveBeenCalledWith(expected);
  })
  it('Teste se, ao executar getSavedCartItems, o método addEventListening é chamado com o "cartItems" como parâmetro', () => {
    const results = remocaoLi();
    expected(results).toHaveBeenCalled();
  })
});
