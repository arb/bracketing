'use strict';

const path = require('path');
const babel = require('rollup-plugin-babel');
const commonJs = require('rollup-plugin-commonjs');

module.exports = {
  input: path.resolve('.', 'index.js'),
  name: 'bracketing',
  output: {
    file: 'dist/bracketing.js',
    format: 'umd'
  },
  plugins: [commonJs(), babel()]
};
