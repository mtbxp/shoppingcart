require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Testa se "fetchProducts" é uma função', () => {
    expect(typeof(fetchProducts)).toBe('function');
  })
  test('Testa se "fetch" foi chamada ao executar a função com o argumento "computador"', async () => {
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
  })
  test('Testa se  ao chamar a função argumento "computador", a função fetch utiliza o endpoint ""', async () => {
  await fetchProducts('computador');
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })
  test('Testa se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    expect(await fetchProducts('computador')).toBe(computadorSearch);
  })
  test('Testa se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'));
  })
});
