require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  test('Se fetchProducts é uma função', () => {
    expect(typeof(fetchProducts)).toBe('function')
  })
  test('se o fetch é chamado', () => {
    fetchProducts('computador');
    expect(fetch).toHaveBeenCalled()
  })
  test('se utiliza o endpoint do mercado livre', async () => {
    const expected = fetchProducts('computador')
    await expect(expected).toStrictEqual(fetch('https://api.mercadolibre.com/sites/MLB/search?q=computador'))
  })
  test('se a função fetchProducts com parametro computador é igual ao mock computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch)
  })
  test('se a função sem parametro retorna um error', async ()=>{
    await expect(fetchProducts()).rejects.toThrow(Error)
  })
});