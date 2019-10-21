import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';

export default {
  input: 'lib/AnythingFinder.js',
  output: {
    file: 'build/bundle.js',
    format: 'esm'
  },
  plugins: [
    common(),
    resolve()
  ]
};