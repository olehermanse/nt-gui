import { defineConfig } from 'tsup';

import { peerDependencies } from './package.json';

export default defineConfig(options => ({
  entryPoints: ['src/button.tsx'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  target: 'esnext',
  platform: 'browser',
  external: [...Object.keys(peerDependencies)],
  ...options
}));
