require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  test("Testa se fetchProducts é uma função", () => {
    expect(typeof fetchProducts).toBe('function');
  })

  test("Execute a função fetchProducts com o argumento 'computador' e teste se fetch foi chamada", async() => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  });

  test("Testa o endpoint passado para a função fetch em fetchProducts", async() => {
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  test("Testa se o retorno com o argumento 'computador' é igual ao computadorSearch", async() => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });

  test("Testa a chamada da função fetchProducts sem URL", async() => {
    try {
    const response = await fetchProducts();
    } catch(error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
    
  });
});
