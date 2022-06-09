const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  test("testa se saveCartitems é uma função", () => {
    expect(typeof saveCartItems).toBe('function')
  })
  test("Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado", () => {
    saveCartItems("<ol><li>Item</li></ol>")
    expect(window.localStorage.setItem).toHaveBeenCalled()
  })
  test("este se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros", () => {
    saveCartItems("<ol><li>Item</li></ol>")
    expect(window.localStorage.setItem).toHaveBeenCalledWith("cartItems", "<ol><li>Item</li></ol>")
  })
  it("testa se a função retorna undefined se chamada sem argumento", () => {
    expect(saveCartItems()).toEqual(undefined)
  })
});
