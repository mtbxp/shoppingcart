require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Test if fethItem is a function', () => expect(typeof fetchItem).toBe('function'));

  it('Test fetchItem function with argument MLB1615760527 and test if fetch was called', async () => {    
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Test if when calling the fetchItem function with the argument "MLB1615760527", the fetch function uses the endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador', async () => {    
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('Test if the return of the fethItem function with the argument "MLB1615760527" is a data structure equal to the item object, which is already imported in the file', async () => {    
    const expectArgument = await fetchItem('MLB1615760527');
    expect(expectArgument).toEqual(item);
  });

  it('Test if calling the fethItem function with no argument returns an error with the message: You must provide an url', async () => {    
    const errorFetchProducts = new Error('You must provide an url');
    const errorFetchItem = await fetchItem();
    expect(errorFetchItem).toEqual(errorFetchProducts);
  }); 
});
