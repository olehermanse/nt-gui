import { defineConfig } from 'tsup';

import { files, peerDependencies } from './package.json';

export default defineConfig(options => ({
  entry: files,
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  loader: { '.js': 'jsx' },
  external: [...Object.keys(peerDependencies)],
  ...options
}));
