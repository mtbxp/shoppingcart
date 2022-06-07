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
      id: 'MLB1615760527',
      site_id: 'MLB',
      title: ' Cpu Pc  Torre Core I5 3470 3.20ghz 8gb Ssd 240gb Com Nf',
      subtitle: null,
      seller_id: 298832663,
      category_id: 'MLB1649',
      official_store_id: null,
      price: 1319.12,
      base_price: 1319.12,
      original_price: 1499,
      currency_id: 'BRL',
      initial_quantity: 1627,
      available_quantity: 50,
      sold_quantity: 500,
      sale_terms: [
        {
          id: 'WARRANTY_TIME',
          name: 'Tempo de garantia',
          value_id: null,
          value_name: '6 meses',
          value_struct: [Object],
          values: [Array]
        },
        {
          id: 'WARRANTY_TYPE',
          name: 'Tipo de garantia',
          value_id: '2230280',
          value_name: 'Garantia do vendedor',
          value_struct: null,
          values: [Array]
        }
      ],
      buying_mode: 'buy_it_now',
      listing_type_id: 'gold_pro',
      start_time: '2020-08-02T23:13:47.000Z',
      stop_time: '2040-07-28T04:00:00.000Z',
      condition: 'new',
      permalink: 'https://produto.mercadolivre.com.br/MLB-1615760527-cpu-pc-torre-core-i5-3470-320ghz-8gb-ssd-240gb-com-nf-_JM',
      thumbnail_id: '601489-MLB42991126172_082020',
      thumbnail: 'http://http2.mlstatic.com/D_601489-MLB42991126172_082020-I.jpg',
      secure_thumbnail: 'https://http2.mlstatic.com/D_601489-MLB42991126172_082020-I.jpg',
      pictures: [
        {
          id: '601489-MLB42991126172_082020',
          url: 'http://http2.mlstatic.com/D_601489-MLB42991126172_082020-O.jpg',
          secure_url: 'https://http2.mlstatic.com/D_601489-MLB42991126172_082020-O.jpg',
          size: '500x470',
          max_size: '850x800',
          quality: ''
        },
        {
          id: '678747-MLB42991129112_082020',
          url: 'http://http2.mlstatic.com/D_678747-MLB42991129112_082020-O.jpg',
          secure_url: 'https://http2.mlstatic.com/D_678747-MLB42991129112_082020-O.jpg',
          size: '472x500',
          max_size: '520x550',
          quality: ''
        },
        {
          id: '868160-MLB42991129113_082020',
          url: 'http://http2.mlstatic.com/D_868160-MLB42991129113_082020-O.jpg',
          secure_url: 'https://http2.mlstatic.com/D_868160-MLB42991129113_082020-O.jpg',
          size: '358x500',
          max_size: '668x932',
          quality: ''
        }
      ],
      video_id: null,
      descriptions: [],
      accepts_mercadopago: true,
      non_mercado_pago_payment_methods: [],
      shipping: {
        mode: 'me2',
        free_methods: [ [Object] ],
        tags: [ 'self_service_out', 'mandatory_free_shipping' ],
        dimensions: null,
        local_pick_up: false,
        free_shipping: true,
        logistic_type: 'cross_docking',
        store_pick_up: false
      },
      international_delivery_mode: 'none',
      seller_address: {
        city: { id: 'BR-SP-44', name: 'São Paulo' },
        state: { id: 'BR-SP', name: 'São Paulo' },
        country: { id: 'BR', name: 'Brasil' },
        search_location: { neighborhood: [Object], city: [Object], state: [Object] },
        id: 618250284
      },
      seller_contact: null,
      location: {},
      coverage_areas: [],
      attributes: [
        {
          id: 'BRAND',
          name: 'Marca',
          value_id: '11049475',
          value_name: 'Montado',
          value_struct: null,
          values: [Array],
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Outros'
        },
        {
          id: 'DISPLAY_SIZE',
          name: 'Tamanho da tela',
          value_id: '-1',
          value_name: null,
          value_struct: null,
          values: [Array],
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Outros'
        },
        {
          id: 'GTIN',
          name: 'Código universal de produto',
          value_id: null,
          value_name: '3000023615004',
          value_struct: null,
          values: [Array],
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Outros'
        },
        {
          id: 'HDD_SIZE',
          name: 'Disco rígido',
          value_id: '2932115',
          value_name: '240 GB',
          value_struct: [Object],
          values: [Array],
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Outros'
        },
        {
          id: 'ITEM_CONDITION',
          name: 'Condição do item',
          value_id: '2230284',
          value_name: 'Novo',
          value_struct: null,
          values: [Array],
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Outros'
        },
        {
          id: 'MODEL',
          name: 'Modelo',
          value_id: null,
          value_name: 'Core i5 3470 3.2ghz',
          value_struct: null,
          values: [Array],
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Outros'
        },
        {
          id: 'OPERATIVE_SYSTEM',
          name: 'Sistema operativo',
          value_id: '345583',
          value_name: 'Windows 10',
          value_struct: null,
          values: [Array],
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Outros'
        },
        {
          id: 'PROCESSOR_TYPE',
          name: 'Processador',
          value_id: '345574',
          value_name: 'Intel Core i5',
          value_struct: null,
          values: [Array],
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Outros'
        },
        {
          id: 'RAM_SIZE',
          name: 'RAM',
          value_id: null,
          value_name: '8 GB',
          value_struct: [Object],
          values: [Array],
          attribute_group_id: 'OTHERS',
          attribute_group_name: 'Outros'
        }
      ],
      warnings: [],
      listing_source: '',
      variations: [],
      status: 'active',
      sub_status: [],
      tags: [
        'brand_verified',
        'good_quality_picture',
        'good_quality_thumbnail',
        'loyalty_discount_eligible',
        'standard_price_by_channel',
        'immediate_payment',
        'cart_eligible'
      ],
      warranty: 'Garantia do vendedor: 6 meses',
      catalog_product_id: null,
      domain_id: 'MLB-DESKTOP_COMPUTERS',
      parent_item_id: null,
      differential_pricing: null,
      deal_ids: [ 'MLB8991', 'MLB4609', 'MLB9000', 'MLB8978' ],
      automatic_relist: false,
      date_created: '2020-08-02T23:13:47.000Z',
      last_updated: '2022-06-05T18:39:36.000Z',
      health: 0.88,
      catalog_listing: false,
      channels: [ 'marketplace', 'mshops' ]
    }];
    expect(await fetchItem('MLB1615760527')).toStrictEqual(expected);
  });
  test('Testando se ao chamar a funçao sem argumento, retorna um erro', async () => {
    const failRequest = await fetchItem();
    expect(failRequest).toEqual(new Error('You must provide an url'));
  });
});
