require('../mocks/fetchSimulator');
const { assign } = require('mocha/lib/utils');
const { fetchProducts } = require('../helpers/fetchProducts');
const { id } = require('../mocks/item');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se `fetchProducts` é uma função', async ()=> {
    await expect(typeof fetchProducts).toBe('function')
  })
  
  it('Verifica se `fetchProducts` recebe `computador` como argumento e se foi testada', async () => {
    fetchProducts('computador')

    await expect(fetch).toHaveBeenCalled()
  })

  it('Verifica se `fetchProducts` recebe `computador` como argumento e utiliza o endpoit `https://api.mercadolibre.com/sites/MLB/search?q=computador`', async ()=> {
    await fetchProducts('computador')

    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })

  it('Verifica se `fetchProducts` recebe `computador` como argumento é uma estrutura de dados', async () => {
     expect(await fetchProducts('computador')).toEqual(computadorSearch)
  })

  it('Verifica se `fetchProducts` sem argumento retorna um erro com a mensagem `You must provide an url`', async () => {
     expect(await fetchProducts()).toEqual(new Error('You must provide an url'))
  })
});
