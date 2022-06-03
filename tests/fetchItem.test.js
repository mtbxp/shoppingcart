require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Deve ser uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('A função fetch deve ser executada com o endpoint correto',() => {
    const endPoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
    expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  })
  it('Deve retornar um erro ao não receber argumento', async () => {
    const error = new Error('You must provide an url');
    await expect(fetchItem()).rejects.toEqual(error);
  })
  it('Deve retornar um objeto com 3 chaves', async () => {
    expect(typeof fetchItem('MLB1615760527')).toBe('object');
    const lengthOfObject = Object.keys(await fetchItem('MLB1615760527'));
    expect(lengthOfObject.length).toBe(3);
  })
});
