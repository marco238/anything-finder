import resolve from 'rollup-plugin-node-resolve';
import common from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';

export default {
  input: 'lib/AnythingFinder.js',
  output: {
    file: 'dist/src/AnythingFinder.js',
    format: 'esm'
  },
  plugins: [
    common(),
    resolve(),
    copy({
      targets: [
        { 
          src: 'index.html',
          dest: 'dist'
        }
      ]
    })
  ]
};