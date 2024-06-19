# libmaxmind

Thin wrapper over npm [`mmdb-lib`](https://www.npmjs.com/package/mmdb-lib), repackaged for direct use in browsers.

> [!IMPORTANT]  
> `Reader` class is enhanced with `ArrayBuffer` support.

Under the hood this package includes browser-compatible Buffer implementation and shims some of the Node.js APIs used by the library.

## Usage

```typescript
import { Reader } from 'https://esm.run/libmaxmind';

const response = await fetch(
  'https://raw.githubusercontent.com/maxmind/MaxMind-DB/main/test-data/GeoLite2-Country-Test.mmdb'
);

const arrayBuffer = await response.arrayBuffer();
const reader = new Reader(arrayBuffer);

reader.get('89.160.20.122');
```

Apart from `ArrayBuffer` support the rest of API is left intact.

## Credits

- https://www.npmjs.com/package/buffer
- https://www.npmjs.com/package/mmdb-lib

## License

MIT
