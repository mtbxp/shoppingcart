require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  
  it('Teste se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function')
  })

  it('Teste se a função Fetch é chamada', async() => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  })

  it('Testa se a função Fetch foi chamada com uma URL', async() => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador')
  })

  it('Testa se os dados recebidos de fetchProducts são iguais aos do objeto ComputadorSearch', async() => {
    expect(await fetchProducts('computador')).toEqual(computadorSearch)
  })
  
  it('Testa se ao chamar a função fetchProducts sem nenhum parametro ela retorna um Erro', async() => {
    try{
      await fetchProducts()
    }catch(e){
      expect(e).toEqual(new Error('You must provide an url'))
    }
  })
});
