require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  test('Testando se é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  test('Testando se fetch foi chamada ao passar "MLB1615760527" como argumento', async () => {
    await fetchItem('MLB1615760527');
    expect(fetch).toHaveBeenCalled();
  });
  test('Testando se ao chamar a função utiliza o endpoint correto', async () => {
    await fetchItem('MLB1615760527');
    const urlRequest = 'https://api.mercadolibre.com/items/MLB1615760527';
    expect(fetch).toHaveBeenCalledWith(urlRequest);
  });
  test('Testando se o retorno da função é uma estrutura de dados correta', async () => {
    const expected = [ 
      {
      "id": "MLB1615760527",
      "site_id": "MLB",
      "title": " Cpu Pc Torre Core I5 3470 3.20ghz 8gb Ssd 240gb Com Nf",
      "subtitle": null,
      "seller_id": 298832663,
      "category_id": "MLB1649",
      "official_store_id": null,
      "price": 1319.12,
      "base_price": 1319.12,
      "original_price": 1499,
      "currency_id": "BRL",
      "initial_quantity": 1627,
      "available_quantity": 50,
      "sold_quantity": 500,
      "sale_terms": [],
      "buying_mode": "buy_it_now",
      "listing_type_id": "gold_pro",
      "start_time": "2020-08-02T23:13:47.000Z",
      "stop_time": "2040-07-28T04:00:00.000Z",
      "condition": "new",
      "permalink": "https://produto.mercadolivre.com.br/MLB-1615760527-cpu-pc-torre-core-i5-3470-320ghz-8gb-ssd-240gb-com-nf-_JM",
      "thumbnail_id": "601489-MLB42991126172_082020",
      "thumbnail": "http://http2.mlstatic.com/D_601489-MLB42991126172_082020-I.jpg",
      "secure_thumbnail": "https://http2.mlstatic.com/D_601489-MLB42991126172_082020-I.jpg",
      "pictures": [],
      "video_id": null,
      "descriptions": [
      ],
      "accepts_mercadopago": true,
      "non_mercado_pago_payment_methods": [
      ],
      "shipping": {},
      "international_delivery_mode": "none",
      "seller_address": {},
      "seller_contact": null,
      "location": {
      },
      "coverage_areas": [
      ],
      "attributes": [],
      "warnings": [
      ],
      "listing_source": "",
      "variations": [
      ],
      "status": "active",
      "sub_status": [
      ],
      "tags": [],
      "warranty": "Garantia do vendedor: 6 meses",
      "catalog_product_id": null,
      "domain_id": "MLB-DESKTOP_COMPUTERS",
      "parent_item_id": null,
      "differential_pricing": null,
      "deal_ids": [],
      "automatic_relist": false,
      "date_created": "2020-08-02T23:13:47.000Z",
      "last_updated": "2022-06-05T18:39:36.000Z",
      "health": 0.88,
      "catalog_listing": false,
      "channels": []
    } 
  ];
    expect(await fetchItem('MLB1615760527')).toBe(expected);
  });
  test('Testando se ao chamar a funçao sem argumento, retorna um erro', async () => {
    const failRequest = await fetchItem();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });
});
