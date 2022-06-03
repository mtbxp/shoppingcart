require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test("Verifica se fechProducts é uma função", () => {
    expect(typeof fetchProducts).toEqual('function')
  })
  test("Verifica se fechProducts com o argumento 'computador' chamou fetch", async () => {    
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  })
  test("Verifica se fechProducts com o argumento 'computador' utiliza a URL especificada",  async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  test("Verifica se fechProducts com o argumento 'computador' retorna uma estrutura de dados igual ao objeto computadorSearch", async () => {
    await expect(typeof fetchProducts('computador')).toEqual('object');
    await expect(typeof fetchProducts('computador')).toEqual(typeof computadorSearch);
  })
  test('Verifica se a função fetchProducts sem argumento, retorna um erro com a mensagem You must provide an url', async () => {
    await expect(() => {
    fetchProducts();
    }).toThrow(new Error('You must provide an url'));
  });
});
