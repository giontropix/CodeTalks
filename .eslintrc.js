module.exports = {
  extends: ['mantine'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/extensions': [
      'error',
      'never',
      {
        fixture: 'always',
        svg: 'always',
        scss: 'always',
        json: 'always',
        png: 'always',
        jpg: 'always',
        css: "always",
      },
    ],
  },
};
