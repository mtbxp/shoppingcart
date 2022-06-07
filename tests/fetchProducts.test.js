require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  

  it('verifica se é função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('argumento \'computador\' e teste se fetch foi chamada', async () => {
    const expected = await fetchProducts('computador');
    expect(fetch).toHaveBeenCalledTimes(1);
    // console.log(expected);
  });

  // 'computador', a função fetch utiliza o endpoint ;
  it('argumento \'computador\' e teste se fetch foi chamada', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProducts('computador');
    await expect(fetch).toHaveBeenCalledWith(url);
    // console.log(expected);
  });

  // 'computador' é uma estrutura de dados igual ao objeto computadorSearch, que já está importado no arquivo.
  it('é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    await expect(fetchProducts('computador')).resolves.toEqual(computadorSearch);
  });
  
  it('sem argumento, retorna um erro', async () => {
    //expect(() => fetchProducts()).resolves.toThrow('You must provide an url');
    
    const result = await fetchProducts();
    expect(result).toEqual(new Error('You must provide an url'));
        
  });
});
