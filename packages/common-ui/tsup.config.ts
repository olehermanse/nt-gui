import { defineConfig } from 'tsup';

import { peerDependencies } from './package.json';

export default defineConfig(options => ({
  entry: ["./src", "!./**/*.test.*"], // Entry points
  format: ['cjs', 'esm'],
  dts: true,
  sourcemap: true,
  external: [...Object.keys(peerDependencies)],
  target: 'esnext',
  loader: { '.js': 'jsx' },
  ...options
}));