require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Testa se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Testa se fetch foi chamada ao executar a função fetchItem com o argumento "computador"', () => {
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  it('Testa se fetch foi chamada com o endPoint correto ao executar a função fetchItem com o argumento "MLB1615760527"', () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527'
    fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(url);
  });
  it('Testa se o retorno da função fetchItem com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const response = await fetchItem('MLB1615760527')
    expect(response).toEqual(item);
  });
  it('Testa se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
    try {
      await fetchItem();
    } catch (error){
      expect(error).toEqual(new Error('You must provide an url'));
    }
  });
});
