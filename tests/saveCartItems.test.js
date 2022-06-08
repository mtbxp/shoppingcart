const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
    test('Teste se, ao executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalled();
    });
    test('Executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros: cartItems e saveCartItems', async () => {
    await saveCartItems('<ol><li>Item</li></ol>');
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>Item</li></ol>');
    });
    // fail('Teste vazio');
    });
    test('Ao comparar com o objeto retornado da API, saveCartItems retorna new Error mensagem esperada aqui ', async () => 
    {
    try {
    await saveCartItems();
    } catch (erro) {
    expect(error).toEqual(new Error('mensagem esperada aqui'));
    }
    });


