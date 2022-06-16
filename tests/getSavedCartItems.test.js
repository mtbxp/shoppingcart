const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('ao executar a função getSavedCartItems o método `localStorage.setItem` deve ser chamado.', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });

  it('ao executar a função getSavedCartItems, o método `localStorage.getItem` deve ser chamado com o paramentro `cartItems`.', () => {
    getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith(localStorage.getItem('cartItems'));
  })
  it('deve retornar uma mensagem de erro `mensagem esperada aqui` caso não receba argumento', () =>{
    ;
    expect(getSavedCartItems()).toEqual(new Error('mensagem esperada aqui'));
    });
});
