# DEPRECATED

[![Depfu](https://badges.depfu.com/badges/9640c46179da71fe6c4edcba55f7c863/overview.svg)](https://depfu.com/github/nilfalse/maxmind?project_id=40733)

> [!CAUTION]  
> This library is deprecated.

<p align="center">Use "mmdb-lib" directly instead.</p>

The code below [works in a browser](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps) - no transpilation needed. Just wrap it in `<script type="module">...</script>` and drop it as is in your HTML.

## ✨ Usage

```javascript
import { Buffer } from 'https://esm.run/buffer';
import { Reader } from 'https://esm.run/mmdb-lib';

const response = await fetch(
  'https://raw.githubusercontent.com/maxmind/MaxMind-DB/main/test-data/GeoLite2-Country-Test.mmdb',
);

const buffer = Buffer.from(await response.arrayBuffer());

const reader = new Reader(buffer);

console.log(reader.get('89.160.20.122'));
```
