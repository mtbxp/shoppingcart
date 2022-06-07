require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  it('Testa se fetchProducts é uma função', async () => {
    const isFunction = await fetchProducts();
    expect(isFunction).toBe('function');
  });

  it('Testa se, ao chamar a função fetchProducts sem argumento, retorna uma mensagem de erro', async () => {
    const failRequest = await fetchProducts();
    expect(failRequest).toEqual(new Error('You must provide un url'));
  });
});

