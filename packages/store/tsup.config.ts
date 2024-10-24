import { defineConfig } from 'tsup';

import { peerDependencies } from './package.json';

export default defineConfig(options => ({
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  external: [...Object.keys(peerDependencies)],
  ...options
}));
