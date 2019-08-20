module.exports = {
  extends: ['plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-member-accessibility': ['warn'],
    // TODO temporal fix
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/ban-ts-ignore': 'warn',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-this-alias': 'warn',
  },
};
