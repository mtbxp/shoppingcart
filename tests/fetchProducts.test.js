require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  });
  
  test('verificar se a fetch foi chamada, ao executar a função fetchProducts com o argumento "computador"', () => {
    // expect.assertions(1);
    fetchProducts('computador');
    expect(fetch).toBeCalled();
  });

  test('se o endpoint está correto, ao executar fetchProducts com o argumento "computador"', () => {
    const expected = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    fetchProducts('computador');
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
      expect(error).toEqual(Error('You must provide an url'));
    }
  });  
});
