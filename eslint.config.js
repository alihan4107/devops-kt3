'use strict';

const js = require('@eslint/js');
const globals = require('globals');

module.exports = [
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
      globals: {
        ...globals.node
      }
    },
    rules: {
      // Обязательные правила задания
      'no-undef': 'error',
      'no-unused-vars': 'error',
      'no-unreachable': 'error'
    }
  }
];
