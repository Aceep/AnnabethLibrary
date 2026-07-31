import js from '@eslint/js';
import globals from 'globals';
import prettier from 'eslint-config-prettier';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'public/**'],
  },

  // Code du jeu : tourne dans le navigateur.
  {
    files: ['src/**/*.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.browser,
    },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: ['error', 'always'],
      'prefer-const': 'error',
    },
  },

  // Fichiers de contenu : les dialogues sont de la prose française, qui
  // emploie légitimement l'espace insécable devant « ! », « ? », « : » et « ; ».
  {
    files: ['src/data/**/*.js'],
    rules: {
      'no-irregular-whitespace': 'off',
    },
  },

  // Outillage : tourne sous Node.
  {
    files: ['scripts/**/*.mjs', 'vite.config.js', 'eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.node,
    },
    rules: {
      ...js.configs.recommended.rules,
    },
  },

  prettier,
];
