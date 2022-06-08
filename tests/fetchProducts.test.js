require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('se é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  test('se ao chamar com o argumento "computador", o fetch foi chamado', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  test(`passando o argumento "computador", a função fetch utiliza o endpoint
  "https://api.mercadolibre.com/sites/MLB/search?q=computador"`, async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveReturnedWith(url);
  });
  test(`passando o argumento "computador", retorna uma estrutura semelhante
    a computadorSearch`, async () => {
      expect(await fetchProducts('computador')).toEqual(computadorSearch);
  });
  test(`se retorna algo.`, async () => {
    expect(await fetchProducts('computador')).toHaveReturned();
  });
  test(`sem argumento, retorna um erro com a mensagem: 'You must provide 
    an url'.`, async () => {
      const errorM = 'You must provide an url';
      expect( async () => {
        await fetchProducts();
      }).toThrow(errorM);
  });
});
