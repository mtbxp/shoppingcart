require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  // implemente seus testes aqui
  test('testa caso fetchProducts é uma função: ', async () => {
    expect.assertions(1);
    expect(typeof fetchProducts).toBe('function');
  });
  test('testa caso fetch foi chamado, e caso foi chamado com url adequado: ', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');

    expect(fetch).toHaveBeenCalled();
    expect(fetch).toHaveBeenCalledWith(url);
  });
  test('testa caso o retorno da função seja igual computerSearch: ', async () => {
    const response = await fetchProducts('computador');
    expect(response).toEqual(computadorSearch);
  });
  test('ao chamar a função fetchProducts sem argumento retorna um erro com a mensagem "You must provide an url"', async () => {
    const response = await fetchProducts();
    expect(response).toEqual(new Error('You must provide an url'))
  });
});
