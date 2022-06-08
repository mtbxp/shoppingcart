require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  test('Testando se é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  test('Testando se fetch foi chamada ao passar "computador" como argumento', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  test('Testando se ao chamar a função utiliza o endpoint correto', async () => {
    await fetchProducts('computador');
    const urlRequest = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(urlRequest);
  });
  test('Testando tipo de retorno da função', async () => {
    const expected = await fetchProducts('computador');
    expect(typeof expected).toEqual('object');
  })
  test('Testando se o retorno da função é um array de 50 elementos', async () => {
    expect(await fetchProducts('computador')).toHaveLength(50);
  });
  test('Testando se ao chamar a funçao sem argumento, retorna um erro', async () => {
    const failRequest = await fetchProducts();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });
});
