module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'views/development/angular-baseapp/tsconfig.json',
    sourceType: 'module'
  },
  plugins: [
    '@typescript-eslint/eslint-plugin',
    'security',
    'prefer-object-spread'
  ],
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:security/recommended'
  ],
  root: true,
  env: {
    browser: true,
    node: true
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/no-explicit-any': 'error',
    'import/prefer-default-export': 'off',
    'class-methods-use-this': 'off',
    'security/detect-object-injection': 'off',
    'no-console': 'error',
    'prefer-template': 'error',
    'no-else-return': 'error',
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'import/no-extraneous-dependencies': 'off',
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement'
    ],
    'prefer-destructuring': 'off',
    'object-shorthand': 'off',
    'camelcase': ['error', { ignoreImports: true }],
    '@typescript-eslint/no-throw-literal': 'off',
    'no-param-reassign': 'off',
    'import/no-cycle': 'off',
    '@typescript-eslint/no-useless-constructor': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { vars: 'local' }],
    'prefer-object-spread/prefer-object-spread': 'error',
    'no-await-in-loop': 'off',
    'dot-notation': 'off',
    '@typescript-eslint/dot-notation': 'off',
    'no-underscore-dangle': 'off',
    'eqeqeq': 'off',
    'no-prototype-builtins': 'off',
    'max-classes-per-file': 'off'
  }
};
