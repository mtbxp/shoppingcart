require('../mocks/fetchSimulator');

const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  // fail('Teste vazio');
  test('se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  test('deve chamar a funcao fetch em algum momento', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  test('se o endpoint do argumento computador está correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador');
    expect(fetch).toBeCalledWith(endpoint);
  })
  test('se a estrutura de dados retornada é igual ao objeto de computador search', async () => {
    const expected = await fetchProducts('computador');
    expect(expected).toEqual(computadorSearch);
  })
  test('se a url estiver vazia retorna um erro', async () => {
    const expected = await fetchProducts();
    expect(expected).toEqual(new Error('You must provide an url'));
  })
});
