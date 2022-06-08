require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  it('Testa se fetchItem é uma função', () =>{
    expect(typeof fetchItem).toBe('function')
  });
  it('Testa se fetch foi chamada como argumento "MLB1615760527"', async () => {
    await fetchItem('MLB1615760527');
    await expect(fetch).toHaveBeenCalled();
  });
  it('Testa se, ao chamar a função fetchItem com o argumento "MLB1615760527", a função fetch utiliza o endpoint correto', async () => {
    await fetchItem('MLB1615760527')
    await expect(fetch).toBeCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('Testa se o retorno da função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    await expect(fetchItem('MLB1615760527')).resolves.toEqual(item);
  });
  it('Teste se, ao chamar a função fetchItem sem argumento, retorna um erro', async () => {
    await expect(fetchItem()).rejects.toThrow(new Error('You must provide an url'));
  });
});
