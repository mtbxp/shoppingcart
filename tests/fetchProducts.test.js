require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  });
  
  test('verificar se a fetch foi chamada, ao executar a função fetchProducts com o argumento "computador"', async () => {
    // expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });

  test('se o endpoint está correto, ao executar fetchProducts com o argumento "computador"', async () => {
    const expected = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(expected);
  });

  test('deve retornar um objeto com as informações esperadas', async () => {
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  });

  test('ao chamar fetchProducts sem parâmetros, deve retornar o erro ', async () => {
    try {
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });  
});
