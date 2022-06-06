require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  test('é uma função', () =>{
    expect(typeof fetchItem).toBe('function');
  });
  test('ao chamar a função com o argumento, MLB1615760527r, a função fetch é chamada', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();  
  });
  test('ao chamar a função com o argumento, MLB1615760527, a função utiliza o endpoint correto', async () => {
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalledWith(endpoint);  
  });
  test('ao chamar a função com o argumento, MLB1615760527, a função retorna um objeto', async () =>{
    await expect(fetchItem('MLB1615760527')).resolves.toEqual(item);  
  });
  test('ao chamar a função sem argumento, retorna um erro', async () =>{
    await expect(fetchItem()).rejects.toThrow('You must provide an url');  
  });  
});
