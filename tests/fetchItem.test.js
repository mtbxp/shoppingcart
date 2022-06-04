require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  /* fail('Teste vazio'); */
  it('Deve ser uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  
  it('Deve chamar a função fecth', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });

  it('Chama fetch com o endpoint correto', async () => {
    const resutl = await fetchItem('MLB1615760527');
    const endpoint = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(endpoint);
  });

  it('Deve conter o retorno correto', async () => {
    const result = await fetchItem('MLB1615760527');
    expect(result).toEqual(item);
  });

  test('Deve retornar um erro com a mensagem: "You must provide an url"', async () => {
    const error = new Error('You must provide an url');
    await expect(fetchItem()).resolves.toThrow(error);
  });

});
