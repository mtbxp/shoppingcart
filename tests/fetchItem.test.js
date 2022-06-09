require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui.
  it('deve ser uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  
  it('deve chamar a função fetch com argumento `MLB1615760527`', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toBeCalled();
  });

  it('deve chamar a função fetchItem com o argumento `MLB1615760527`, a função fetch utiliza o endpoint `https://api.mercadolibre.com/items/MLB1615760527`', async () => {
    await fetchItem('MLB1615760527')  
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });

  it('a função fetchItem com o argumento `MLB1615760527` deve ser igual ao ao objeto `item`', async () => {
    expect(await fetchItem('MLB1615760527')).toEqual(item)
  });

  it('deve retornar `You must provide an url` caso não receba argumento', async () =>{
  ;
  expect(await fetchItem()).toEqual(new Error('You must provide an url'));
  });
});
