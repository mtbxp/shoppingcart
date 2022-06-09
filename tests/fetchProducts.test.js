require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {

  test('fetchProducts é uma função?', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  test('a função fetchProducts com o argumento "computador" e teste se fetch foi chamada;', () => {
    fetchProducts("computador");
    expect(fetch).toHaveBeenCalled();
  });
  test('se, ao chamar a função fetchProducts com o argumento "computador", a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    await fetchProducts("computador");
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/sites/MLB/search?q=computador");
  });
  test('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.', async () => {
    await expect(fetchProducts('computador')).resolves.toEqual(computadorSearch);
  });
  test('se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url".', async () => {
    await expect(fetchProducts('')).rejects.toMatch('You must provide an url'); // não funcionando corretamente
  });
});
