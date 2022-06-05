require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function')
  });
  it('a função fetchItem chamada com o argumento "MLB1615760527",ver se fetch foi chamada', async () => {
    await fetchItem('MBL1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('a função fetchItem chamada com o argumento "MLB1615760527",ver se fetch utiliza o endpoint correto', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527'
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(url);
  });
  it('se o retorno da função fetchItem é igual ao objeto item', async () =>{
    const response = await fetchItem('MLB1615760527');
    expect(response).toEqual(item);
  });
  it('com o argumento vazio, retorna um erro com a mensagem esperada', async () =>{
    const response = await fetchItem();
    expect(response).toEqual(new Error('You must provide an url'));
  });
  // fail('Teste vazio');
});
