import { defineConfig } from 'tsup';

import { peerDependencies } from './package.json';

export default defineConfig(options => ({
  entryPoints: ['src/button.tsx', 'src/auditlogs/auditlogs.js'],
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  target: 'esnext',
  platform: 'browser',
  external: [...Object.keys(peerDependencies)],
  target: 'esnext',
  loader: { '.js': 'jsx' },
  ...options
}));
