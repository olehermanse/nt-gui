import { defineConfig } from 'tsup';

import { peerDependencies } from './package.json';

export default defineConfig(options => ({
  format: ['cjs', 'esm'],
  dts: true,
  entry: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.test.{js,jsx,ts,tsx}'],
  sourcemap: true,
  target: 'esnext',
  platform: 'node',
  external: [...Object.keys(peerDependencies)],
  ...options
}));
