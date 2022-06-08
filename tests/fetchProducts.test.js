require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Testa se fetchProducts é uma função', ()  => {
    expect(typeof fetchProducts).toBe('function');
  });

  test('Testa se o fetch está sendo chamado', async ()  => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  test('Testa se executa o fetch no endpoint correto', async ()  => {
    expect.assertions(1);
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador')
    expect(fetch).toBeCalledWith(url);
  });

  test('Testa se a função retorna um arquivo de dados do tipo objeto', async ()  => {
    const url = await fetchProducts('computador');
    expect(url).toEqual(computadorSearch);
  });

  test('Testa se a função retorna um erro ao não receber argumentos', async ()  => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  });
});
