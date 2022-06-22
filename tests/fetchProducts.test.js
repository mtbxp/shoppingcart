require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })

  it('Execute a função fetchProducts com o argumento computador e teste se fetch foi chamada', async () => {
    const executada = await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })

  it('utilização do endpoint', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    const guardar = await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(url);
  })

  it('Estruturas iguais', async () => {
    const comparar =  await fetchProducts('computador');
    expect(comparar).toEqual(computadorSearch);
  })
});
