import { defineConfig } from 'tsup';

import { files, peerDependencies } from './package.json';

export default defineConfig(options => ({
  entry: files,
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  external: [...Object.keys(peerDependencies)],
  ...options
}));
