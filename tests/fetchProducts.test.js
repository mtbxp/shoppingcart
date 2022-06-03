require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');
const messageError = new Error('You must provide an url'); 

describe('1 - Teste a função fetchProducts', () => {   
  it('Test if fethProducts is a function', () => expect(typeof fetchProducts).toBe('function'));
 
  it('Test fethProducts function with computer argument and test if fetch was called', async () => {    
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('Test that when calling the fetchProducts function with the "computer" argument, the fetch function uses the correct endpoint', async () => {    
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });

  it('Test if the fetchProducts function return with the "computer" argument is a data structure equal to the computerSearch object, which is already imported in the file', async () => {    
    const expectArgument = await fetchProducts('computador');
    expect(expectArgument).toMatchObject(computadorSearch.results);
  }); 

   it('Test if calling the fetchProducts function with no argument returns an error with the message: You must provide an url', async () => {       
    const errorFetchProducts = await fetchProducts();
    expect(errorFetchProducts).toEqual(messageError);
  });  

});
