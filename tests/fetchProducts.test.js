require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Deve ser uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });
  it('2 - Com o argumento "computador", a função fetch deve ser chamada', async () => {
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });
  it('3 - Com o argumento "computador", a função fetch deve ser chamada com o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador');
  });
  it('4 - Com o argumento "computador", a função fetch deve ser chamada com o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador');
  });
  it('5 - Deve retornar um objeto com as propriedades esperadas', async () => {
    const response = await fetchProducts('computador');

    expect(response).toEqual(computadorSearch);
  });
  it('6 - Sem argumento, deve retornar um erro com a mensagem esperada', async () => {
    const response = await getMagicCard();

    expect(response).toEqual(new Error('You must provide an url'));
  });

});
