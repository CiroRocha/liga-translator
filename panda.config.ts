import { defineConfig } from '@pandacss/dev'

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  // The extension for the emitted JavaScript files
  outExtension: 'js',
  // Where to look for your css declarations
  include: [
    './app/**/*.{js,jsx,ts,tsx}',
  ],
  // Files to exclude
  exclude: [],
  // The output directory for your css system
  outdir: 'styled-system',
  jsxFramework: 'react',
  minify: isProd,
  optimize: isProd,
  hash: isProd,
})