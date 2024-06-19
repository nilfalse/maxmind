import * as mmdb from 'mmdb-lib';
import type { ReaderOptions } from 'mmdb-lib/lib/types.js';

export class Reader<T extends mmdb.Response> extends mmdb.Reader<T> {
  constructor(db: Buffer | ArrayBuffer, opts?: ReaderOptions) {
    super(db instanceof ArrayBuffer ? Buffer.from(db) : db, opts);
  }
}

export * from 'mmdb-lib';
