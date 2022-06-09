require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it ('Teste se fetchProducts é uma função', async () => {
    await fetchProducts;
    expect(typeof fetchProducts).toBe('function');
  })
  it(`Execute a função fetchProducts com o argumento 'computador' e teste se fetch foi chamada;`, async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  })
  it(`Teste se, ao chamar a função fetchProducts com o argumento 'computador', a função fetch utiliza o endpoint 'https://api.mercadolibre.com/sites/MLB/search?q=computador'`, async () => {
    await fetchProducts('computador');
    const endPointOfComputador = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    expect(fetch).toHaveBeenCalledWith(endPointOfComputador);''
  })
  it(`Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: 'You must provide an url'`, async () => {
    await expect(fetchProducts())
    .rejects
    .toThrow('You must provide an url');
  })
});
