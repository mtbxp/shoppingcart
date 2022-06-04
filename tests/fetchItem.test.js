require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Teste se fetchItem é uma função', () =>{
    expect(typeof fetchItem).toEqual('function')
  })

  it('Com o argumento "MLB1615760527" ', async() =>{
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  })
  it('[...] estrutura de dados igual ao objeto item ', async() =>{
    expect(await fetchItem('MLB1615760527')).toEqual(item)
  })
  it('ao chamar a função fetchItem sem argumento, retorna um erro', async() =>{    
    try{
      await fetchItem()
    }catch(e){
      expect(e).toEqual(new Error('You must provide an url'))
    }
  })

});
