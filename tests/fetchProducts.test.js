require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  
  it('Teste se fetchProducts é uma função', () =>{
    expect(typeof fetchProducts).toEqual('function')
  })

  it('Execute a função fetchProducts com o argumento', async() =>{
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })

  it('[...] a função fetch utiliza o endpoint ', async() =>{
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  })

  it('[...] estrutura de dados igual ao objeto computadorSearch ', async() =>{
    expect(await fetchProducts('computador')).toEqual(computadorSearch)
  })

  it('ao chamar a função fetchProducts sem argumento, retorna um erro', async() =>{    
    try{
      await fetchProducts()
    }catch(e){
      expect(e).toEqual(new Error('You must provide an url'))
    }
  })  
});
