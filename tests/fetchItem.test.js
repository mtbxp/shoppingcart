require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('deve ser uma função', () => {
    expect(typeof fetchItem).toBe('function')
  })
  it('deve chamar o fetch quando receber o argumento "MLB1615760527"', async () => {
    await fetchItem("MLB1615760527")
    expect(fetch).toHaveBeenCalled()
  })
  
  it('deve utilizar o endpoint correto quando receber o argumento "MLB1615760527"', async () => {
    const endpoint = "https://api.mercadolibre.com/items/MLB1615760527"
    await fetchItem("MLB1615760527")
    expect(fetch).toHaveBeenCalledWith(endpoint)
  })
  
  it('deve ter o mesmo retorno que item quando receber o argumento "MLB1615760527"', async () => {
    const response = await fetchItem("MLB1615760527")
    expect(response).toEqual(item)
  })

  it('deve retornar o erro "You must provide an url" quando não receber nenhum parâmetro', async () => {
    const response = await fetchItem()
    expect(response).toEqual(new Error('You must provide an url'))
  })
});
