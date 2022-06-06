const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', async () => {
  test('saveCartItems é uma função', () => {
    expect(typeof saveCartItems).toBe('function')
  });
  test('o que é chamado na função', async () => {
    const parm = <ol><li>Item</li></ol>
    expect(saveCartItems(parm)).toHaveBeenCalled(localStorage.setItem);
    expect(saveCartItems(parm)).toHaveBeenCalled(localStorage.setItem('cartItems', parm));
  });
  test('retorno esperado da função', async (done) => {
    const expected = await saveCartItems();
    done();
    expect(await saveCartItems('computador')).toEqual(computadorSearch);
    expect(() => expected).toEqual(new Error('mensagem esperada aqui'));
  });
});
