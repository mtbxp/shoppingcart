require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');


describe('2 - Teste a função fetchItem', () => {
  test('Verifica se fetchItem é uma função', async () => {
    expect(typeof fetchItem).toBe('function')
  });

  test('Verifica se a função fetch é chamada', async () => {
    const resultado = await fetchItem('MLB1615760527')
    expect(fetch).toBeCalled()
  })

  test('Verifica se a funcao "fetchItem" vai para  endpoint correto', () => {
    const resultado = fetchItem('MLB1615760527')
    const url = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toBeCalledWith(url)
  })

  test('Verifica se a função fetchItem com o argumento "MLB1615760527" retorna a estrutura de dados correta', async () => {
    const resultado = await fetchItem('MLB1615760527');
    expect(resultado).toEqual(item)
  })
  test('Verifica o erro se for nao passar uma url como argumento', async () => {  
    try {
      await fetchItem()
      expect(true).toBe(false)
    } catch (error) {
      expect(error).toEqual(new Error(('You must provide an url')))
    }
  })

 
  // fail('Teste vazio');
});
