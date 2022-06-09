const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  test("Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado", () => {
    getSavedCartItems()
    expect(window.localStorage.getItem).toHaveBeenCalled()
  })
  test("Teste se, ao executar getSavedCartItems, o método localStorage.getItem é chamado com o 'cartItems' como parâmetro.", () => {
    getSavedCartItems("cartItems")
    expect(window.localStorage.getItem).toHaveBeenCalledWith("cartItems")
  })
  test("testa se getSavedCartItems é uma função", () => {
    expect(typeof getSavedCartItems).toBe('function')
  })
  test("testa se a função retorna undefined se chamada sem argumento", () => {
    expect(getSavedCartItems()).toEqual(undefined)
  })
});
