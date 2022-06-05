require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Se fetchItem é uma função', async () => {
    expect(typeof fetchItem).toEqual('function')
  })

  it('Se fetchItem com o argumento do item "MLB1615760527" e testa se fetch foi chamado', async () => {
    const result = await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled()
  })

  it('Se fetchItem c o arg "MLB1615760527", a função fetch utiliza o endpoit "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
  const url = fetchItem('MLB1615760527');
  expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527')
  })

  it('Retorna erro', async () => {
    try {
      const url = await fetchItem()
    } catch(error) {
      expect(error).toEqual(new Error('You must provide an url'))
    }
  })
  it('', async () => {
    
  })
});
