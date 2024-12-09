import { defineConfig } from 'tsup';

export default defineConfig(options => ({
  format: ['esm'],
  dts: true,
  entry: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.test.{js,jsx,ts,tsx}', '!src/api/types'],
  sourcemap: true,
  skipNodeModulesBundle: true,
  clean: true,
  loader: { '.js': 'jsx' },
  ...options
}));
