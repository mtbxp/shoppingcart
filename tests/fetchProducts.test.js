require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test ('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  })
  test('Verifica se: ao ser chamada com o argumento "computador", retorna a resposta da url : ', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
    // Use .toHaveBeenCalledWith para garantir que uma função de simulação (mock, em inglês) foi chamada com argumentos específicos. link: https://jestjs.io/pt-BR/docs/expect#tohavebeencalled
  })
});
