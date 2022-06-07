require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {

  const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
  
  test('Verifica se fetchProducts é uma função.', async () => {
    await fetchProducts;
    expect(typeof fetchProducts).toEqual('function');
  });

  test('Verifica se fetch é chamada ao executar fetchProducts com o argumento computador.', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  
  test('Verifica se, ao colocar computador como argumento de fetchProducts, a função fetch utiliza a url.', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  
  test('Verifica se o retorno da função fetchProducts, com o argumento computador, é uma estrutura de dados igual ao objeto computadorSearch.', async () => {
    const result = await fetchProducts('computador');
    expect(result).toStrictEqual(computadorSearch);
  });

  test('Verifica se é retornado um erro quando nenhum argumento é passado.', async () => {
    await expect(fetchProducts()).rejects.toThrowError(new Error('You must provide an url'));
  });

});