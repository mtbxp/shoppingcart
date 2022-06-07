require('../mocks/fetchSimulator');
const { type } = require('mocha/lib/utils');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts('computador')).toBe("function");
  })

  it('Verifica se fetch foi chamado quando passado "computador" como argumento da função', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled()
  })

  it('Verifica se a função fetchProducts com o parâmetro "computador" utiliza o endpoint URL', async () => {
    const URL = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith(URL)
  })

  it('Verifica se o retorno da função fetchProducts com o parâmetro "computador" é igual ao objeto computadorSearch', async () => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch)
  })

  it('Verifica se a função fetchProducts retorna o erro "You must provide an url" quando passada sem parâmetro', async () => {
    expect(await fetchProducts()).toThrow('You must provide an url')
  })
});
