require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Se fetchProducts é uma função', () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe('function');
  });

  test('Se a função fetch é chamada e com o edpoint correto, ao executar a função fetchProducts com o argumento "computador"', async () => {
    expect.assertions(2);
    await fetchProducts('computador');
    expect(fetch).toBeCalled();
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  test('Se a função fetchProducts retorna um objeto igual ao objeto computadorSearch, quando passado o argumento "computador"', async () => {
    expect.assertions(1);
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
  });

  test('Se a função fetchProducts retorna um erro com a mensagem "You must provide an url", quando chamada sem agumento', async () => {
    expect.assertions(1);
    const responseNoParam = await fetchProducts();
    expect(responseNoParam).toEqual(new Error('You must provide an url'));
  });
});
