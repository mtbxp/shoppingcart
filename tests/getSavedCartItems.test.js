const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('ao executar a função getSavedCartItems o método `localStorage.setItem` deve ser chamado.', async () => {
    await getSavedCartItems();
    expect(localStorage.getItem).toBeCalled();
  });

  it('ao executar a função getSavedCartItems, o método `localStorage.getItem` deve ser chamado com o paramentro `cartItems`.', async () => {
    await getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalledWith(localStorage.getItem('cartItems'));
  })
  it('deve retornar uma mensagem de erro `mensagem esperada aqui` caso não receba argumento', async () =>{
    ;
    expect(await getSavedCartItems()).toEqual(new Error('mensagem esperada aqui'));
    });
});
