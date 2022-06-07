require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Testa se fetchItem é uma função', () =>{
    expect(typeof fetchItem).toBe('function')
  });
  it('Testa se fetchItem foi chamada como argumento "MLB1615760527"', async () => {
    await expect(fetchItem('MLB1615760527')).toHaveBeenCalled();
  });
  it('Testa se, ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint correto', async () => {
    await expect(fetchItem('MLB1615760527')).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('Testa se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    await expect(fetchItem('MLB1615760527')).toEqual(item);
  });
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro', async () => {
    await expect(fetchItem()).toEqual(new Error('You must provide an url'));
  });
});
