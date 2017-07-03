/* eslint-disable no-console */

import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify'; // eslint-disable-line import/extensions

const cdn = process.env.CDN;
const mode = cdn ? 'nodejs' : 'browser';

console.log(`Creating ${mode} bundle...`);

const targets = cdn
  ? [{ dest: 'build/core.min.js', format: 'iife' }]
  : [{ dest: 'build/core.js', format: 'umd' }, { dest: 'build/core.es.js', format: 'es' }];

const plugins = [
  nodeResolve(),
  commonjs(),
  babel({
    babelrc: false,
    presets: [['env', { modules: false }]]
  })
];

if (cdn) plugins.push(uglify());

const options = {
  entry: 'src/index.js',
  amd: {
    id: '@auth0/styleguide-core'
  },
  moduleName: 'auth0StyleguideCore',
  targets,
  plugins,
  sourceMap: true,
  external: [],
  globals: {}
};

if (!cdn) {
  options.external.push('fontfaceobserver');
  options.globals.fontfaceobserver = 'FontFaceObserver';
}

export default options;
