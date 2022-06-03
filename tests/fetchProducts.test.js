require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  fail('Teste vazio');
  test('Deve ser uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  test('Deve chamar a funcao fecth', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  });

  test('Chama fetch com o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    const result = await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  test('Deve conter o retorno correto', async () => {
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  });

  test('Deve retornar um erro com a mensagem: "You must provide an url"', async () => {
    const error = new Error('You must provide an url');
    await expect(fetchProducts()).resolves.toThrow(error);
  });

});
