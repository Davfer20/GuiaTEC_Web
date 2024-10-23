import eslint from '@eslint/js';
import parser from '@typescript-eslint/parser';
import plugin from '@typescript-eslint/eslint-plugin';

const config = [
  {
    languageOptions: {
      globals: {
        window: 'readonly',
      },
      parser: parser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'warn',
      'quotes': ['warn', 'single'], // Fuerza el uso de comillas simples
      'indent': ['warn', 2], // Requiere 2 espacios para la indentación
      'no-multiple-empty-lines': ['warn', { max: 1 }], // Prohíbe múltiples líneas vacías
      'no-var': 'warn', // Desalienta el uso de `var`
      'prefer-const': 'warn', // Recomienda `const` cuando la variable no se reasigna
      'max-len': ['warn', { code: 100 }], // Establece un límite de longitud de línea
      'require-await': 'warn', // Asegura que las funciones `async` contengan `await`
      'consistent-this': ['warn', 'self'], // Consistencia en el uso de `this`
      'consistent-return': 'warn', // Fuerza que las funciones devuelvan valor consistente
      'no-warning-comments': ['warn', { terms: ['TODO', 'FIXME'], location: 'anywhere' }], // Advertencia para comentarios de advertencia
    },
    plugins: {
      '@typescript-eslint': plugin,
    },
  },
  {
    
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: parser, // Make sure TypeScript parser is set correctly
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        project: './tsconfig.json', // Ensure ESLint knows about TypeScript config
      },
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'warn', // Fuerza que todas las funciones tengan un tipo de retorno explícito
      '@typescript-eslint/no-explicit-any': 'warn', // Desalienta el uso de 'any'
    },
  },
];

export default config;
