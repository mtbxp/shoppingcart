require('../mocks/fetchSimulator');
const { type } = require('mocha/lib/utils');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  test('deve ser uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  test('se fetch foi chamada ao executar a função fetchProducts com o argumento \'computador\'', async () => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  test('se, ao chamar a função fetchProducts com o argumento \'computador\', a função fetch utiliza o endpoint \'https://api.mercadolibre.com/sites/MLB/search?q=computador\'', async () => {
    expect.assertions(1);
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });

  test('se o retorno da função fetchProducts com o argumento \'computador\' é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    expect.assertions(1);
    const result = await fetchProducts('computador');
    expect(result).toEqual(computadorSearch);
  });

  test('se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: \'You must provide an url\'', async () => {
    expect.assertions(1);
    try {
      await fetchProducts('computador');
    } catch (err) {
      expect(err).toEqual(new Error('You must provide an url'));
    }
  });
});
