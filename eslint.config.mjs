import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import react from 'eslint-plugin-react';
import prettierRecommended from 'eslint-plugin-prettier/recommended';

const eslintConfig = [
  { ignores: ['.next/**', 'node_modules/**', '.vercel/**'] },
  ...nextCoreWebVitals,
  react.configs.flat.recommended,
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['**/page.js', '**/layout.js'],
    rules: {
      'react/display-name': 'off',
    },
  },
];

export default eslintConfig;
