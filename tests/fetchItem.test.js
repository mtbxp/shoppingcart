require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // fail('Teste vazio');
  it ('Retorna se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Testa se fetch foi chamado quando passado o argumento "MLB1615760527" para função fetchItem', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });
  it('Teste se, ao chamar a função fetchItem com o argumento "MLB1615760527" , a função fetch utiliza o endpoint " https://api.mercadolibre.com/items/MLB1615760527 "', async () => {
    const apiEndPoint = 'https://api.mercadolibre.com/items/MLB1615760527'
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalledWith(apiEndPoint);
  });
  it('Teste se o retorno da função fetchItem com o argumento "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    expect(typeof await fetchItem('MLB1615760527')).toEqual(typeof item);
  });
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro com a mensagem: "You must provide an url"', async () => {
   try {
    await fetchItem();
  } catch(error) {
    expect(error).toEqual(new Error('You must provide an url'))
  }
  });
});
