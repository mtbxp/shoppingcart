require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
 it('fetchProducts é uma função', () => {
   expect(typeof fetchProducts).toBe('function')

}); it(`Execute a função fetchProducts com o argumento 'computador' e teste se fetch foi chamada;` , async () => {
  fetchProducts('computador');
   expect(fetch).toHaveBeenCalled();
})
  it(`Teste se, ao chamar a função fetchProducts com o argumento 'computador', a função fetch utiliza o endpoint` , async () => {
    fetchProducts('computador');
    expect(fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador'))
  })
  it(`Teste se o retorno da função fetchProducts com o argumento 'computador' é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.`, async () => {
    expect(await fetchProducts('computador')).toBe(computadorSearch);
  })
  it(`Teste se, ao chamar a função fetchProducts sem argumento, retorna um erro com a mensagem: 'You must provide an url'` , async () => {
    expect(await fetchProducts()).toEqual(new Error('You must provide an url'))
  })
;})
