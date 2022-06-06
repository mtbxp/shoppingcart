require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('Se fetchItem é uma função', () =>{
    expect(typeof(fetchItem)).toBe('function')
  })
  test('se a função fetch é chamada', () => {
    fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled()
  })
  test('se utiliza o endpoint certo ao chamar fetchItem', async () => {
    await expect(fetchItem('MLB1615760527')).toStrictEqual(fetch("https://api.mercadolibre.com/items/MLB1615760527"))
  })
  test('se a estrutura de dados retornada é correta', async ()=> {
    expect(await fetchItem('MLB1615760527')).toEqual(item)
  })
  test('testa se a função sem parametro retorna um erro', async ()=>{
    await expect(fetchItem()).rejects.toThrow(Error)
  })
});
