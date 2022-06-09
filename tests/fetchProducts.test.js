require('../mocks/fetchSimulator');
const { type } = require('mocha/lib/utils');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('fetchProducts deve ser uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  })

  it('Fetch deve ser chamado quando quando a função receber "computador" como parâmetro', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled()
  })

  it('Função deve usar o endpoint correto quando receber "computador" como parâmetro', async () => {
    const endpoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(endpoint)
  })

  it('Deve ter o mesmo retorno que computadorSearch quando receber o argumento "computador"', async () => {
    const response = await fetchProducts('computador')
    expect(response).toEqual(computadorSearch)
  })

  it('Deve retornar o erro "You must provide an url" quando não receber argumento', async () => {
    const response = await fetchProducts()
    expect(response).toEqual(new Error('You must provide an url'))
  })
});
