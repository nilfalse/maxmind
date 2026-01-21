import assert from 'node:assert/strict';
import { before, describe, it } from 'node:test';
import fs from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

import * as maxmind from '../index.mjs';

describe('maxmind', () => {
  let arrayBuffer: ArrayBuffer;
  before(async () => {
    arrayBuffer = await fs
      .readFile(
        fileURLToPath(import.meta.resolve('./GeoLite2-Country-Test.mmdb'))
      )
      .then(({ buffer }) => buffer as ArrayBuffer);
  });

  before(() => {
    // make sure Node.js Buffer is not available so it tests embedded one instead
    globalThis.Buffer = undefined as unknown as typeof Buffer;
  });

  it('should resolve a country for IPv6', () => {
    const reader = new maxmind.Reader<maxmind.CountryResponse>(arrayBuffer);

    assert.deepEqual(reader.get('2a02:fc40::1'), {
      continent: {
        code: 'EU',
        geoname_id: 6255148,
        names: {
          de: 'Europa',
          en: 'Europe',
          es: 'Europa',
          fr: 'Europe',
          ja: 'ヨーロッパ',
          'pt-BR': 'Europa',
          ru: 'Европа',
          'zh-CN': '欧洲',
        },
      },
      country: {
        geoname_id: 2623032,
        is_in_european_union: true,
        iso_code: 'DK',
        names: {
          de: 'Dänemark',
          en: 'Denmark',
          es: 'Dinamarca',
          fr: 'Danemark',
          ja: 'デンマーク王国',
          'pt-BR': 'Dinamarca',
          ru: 'Дания',
          'zh-CN': '丹麦',
        },
      },
      registered_country: {
        geoname_id: 2623032,
        is_in_european_union: true,
        iso_code: 'DK',
        names: {
          de: 'Dänemark',
          en: 'Denmark',
          es: 'Dinamarca',
          fr: 'Danemark',
          ja: 'デンマーク王国',
          'pt-BR': 'Dinamarca',
          ru: 'Дания',
          'zh-CN': '丹麦',
        },
      },
    });

    assert.deepEqual(reader.get('2a02:d300::1'), {
      continent: {
        code: 'EU',
        geoname_id: 6255148,
        names: {
          de: 'Europa',
          en: 'Europe',
          es: 'Europa',
          fr: 'Europe',
          ja: 'ヨーロッパ',
          'pt-BR': 'Europa',
          ru: 'Европа',
          'zh-CN': '欧洲',
        },
      },
      country: {
        geoname_id: 690791,
        iso_code: 'UA',
        names: {
          de: 'Ukraine',
          en: 'Ukraine',
          es: 'Ucrania',
          fr: 'Ukraine',
          ja: 'ウクライナ共和国',
          'pt-BR': 'Ucrânia',
          ru: 'Украина',
          'zh-CN': '乌克兰',
        },
      },
      registered_country: {
        geoname_id: 690791,
        iso_code: 'UA',
        names: {
          de: 'Ukraine',
          en: 'Ukraine',
          es: 'Ucrania',
          fr: 'Ukraine',
          ja: 'ウクライナ共和国',
          'pt-BR': 'Ucrânia',
          ru: 'Украина',
          'zh-CN': '乌克兰',
        },
      },
    });
  });

  it('should resolve a country for IPv4', () => {
    const reader = new maxmind.Reader<maxmind.CountryResponse>(arrayBuffer);

    assert.deepEqual(reader.get('89.160.20.122'), {
      continent: {
        code: 'EU',
        geoname_id: 6255148,
        names: {
          de: 'Europa',
          en: 'Europe',
          es: 'Europa',
          fr: 'Europe',
          ja: 'ヨーロッパ',
          'pt-BR': 'Europa',
          ru: 'Европа',
          'zh-CN': '欧洲',
        },
      },
      country: {
        geoname_id: 2661886,
        is_in_european_union: true,
        iso_code: 'SE',
        names: {
          de: 'Schweden',
          en: 'Sweden',
          es: 'Suecia',
          fr: 'Suède',
          ja: 'スウェーデン王国',
          'pt-BR': 'Suécia',
          ru: 'Швеция',
          'zh-CN': '瑞典',
        },
      },
      registered_country: {
        geoname_id: 2921044,
        is_in_european_union: true,
        iso_code: 'DE',
        names: {
          de: 'Deutschland',
          en: 'Germany',
          es: 'Alemania',
          fr: 'Allemagne',
          ja: 'ドイツ連邦共和国',
          'pt-BR': 'Alemanha',
          ru: 'Германия',
          'zh-CN': '德国',
        },
      },
    });

    assert.deepEqual(reader.get('67.43.156.156'), {
      continent: {
        code: 'AS',
        geoname_id: 6255147,
        names: {
          de: 'Asien',
          en: 'Asia',
          es: 'Asia',
          fr: 'Asie',
          ja: 'アジア',
          'pt-BR': 'Ásia',
          ru: 'Азия',
          'zh-CN': '亚洲',
        },
      },
      country: {
        geoname_id: 1252634,
        iso_code: 'BT',
        names: {
          de: 'Bhutan',
          en: 'Bhutan',
          es: 'Bután',
          fr: 'Bhutan',
          ja: 'ブータン王国',
          'pt-BR': 'Butão',
          ru: 'Бутан',
          'zh-CN': '不丹',
        },
      },
      registered_country: {
        geoname_id: 798549,
        is_in_european_union: true,
        iso_code: 'RO',
        names: {
          de: 'Rumänien',
          en: 'Romania',
          es: 'Rumanía',
          fr: 'Roumanie',
          ja: 'ルーマニア',
          'pt-BR': 'Romênia',
          ru: 'Румыния',
          'zh-CN': '罗马尼亚',
        },
      },
    });
  });
});
