// [lock-all/] 🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫🚫

/*
 * We use a JavaScript file for the .eslintrc file (instead of a JSON file) as it supports
 * comments that can be used to better describe rules and allows us to write some logic.
 *
 * This config lints both TS and JS. Shared rules are defined below, and any additional rules specific
 * to either TS or JS are specified in addition to those.
 *
 * For all other files types, such as JSON, you can use Prettier and turn on
 * the auto format option in VS Code. You can select Prettier when running Format Document the first time in VS Code.
 *
 * This config uses Prettier as an ESLint rule. The advantage of having prettier setup as an
 * ESLint rule using eslint-plugin-prettier is that JS and TS code can automatically be fixed using ESLint's --fix option.
 * Prettier's config is defined in `.prettierrc.js`. See that file for more information.
 *
 * ## Automatically Fix Code in VS Code
 *
 * For a good developer experience, it's useful to setup your editor to automatically run ESLint's automatic
 * fix command (i.e. eslint --fix) whenever a file is saved. Here is the VS Code config
 * required in the settings.json file in VS Code to get automatic fixing whenever saving a file:
 *
 * ```
 * {
 *   "editor.codeActionsOnSave": {
 *     "source.fixAll.eslint": true
 *   },
 * }
 * ```
 *
 * See the following post for more: https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
 */

/** Rules shared by both the TS and JS lint configurations. */
const sharedTSAndJSRules = {
  'react/display-name': 'off',
  // Disable error about display name
  'react/prop-types': 'off',
  // Disable error about prop types
  'react/no-unescaped-entities': 'off',
  // Disable error about unescaped entities
  'react-hooks/rules-of-hooks': 'error',
  // Checks rules of Hooks
  'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
};
/** Rules specific to TS. */

const tsSpecificRules = {
  '@typescript-eslint/no-empty-interface': 'off', // Disable empty interface error
  '@typescript-eslint/no-explicit-any': 'warn', // Warn on any
};
/** Rules specific to JS. */

const jsSpecificRules = {
  'react/prop-types': 'off', // Disable error about prop types
};
module.exports = {
  // Below we use the overrides array to define separate linting options for both TS and JS.
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      // TypeScript files
      parser: '@typescript-eslint/parser',
      // Specifies the ESLint parser for TypeScript
      parserOptions: {
        ecmaVersion: 2020,
        // Allows for the parsing of modern ECMAScript features
        sourceType: 'module',
        // Allows for the use of imports
        ecmaFeatures: {
          jsx: true, // Allows for the parsing of JSX
        },
      },
      extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:react-hooks/recommended', // Uses the recommended rules from @eslint-plugin-react-hooks
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'plugin:storybook/recommended', // Storybook
      ],
      settings: {
        react: {
          version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
      },
      rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        ...sharedTSAndJSRules,
        // Rules shared by both TS and JS lint configs
        ...tsSpecificRules, // Rules specific to TS
      },
    },
    {
      files: ['**/*.js', '**/*.jsx'],
      // JavaScript files
      parserOptions: {
        ecmaVersion: 2020,
        // Allows for the parsing of modern ECMAScript features
        sourceType: 'module',
        // Allows for the use of imports
        ecmaFeatures: {
          jsx: true, // Allows for the parsing of JSX
        },
      },
      extends: [
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:react-hooks/recommended', // Uses the recommended rules from @eslint-plugin-react-hooks
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
        'plugin:storybook/recommended', // Storybook
      ],
      settings: {
        react: {
          version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
      },
      rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        // e.g. "@typescript-eslint/explicit-function-return-type": "off",
        ...sharedTSAndJSRules,
        // Rules shared by both TS and JS lint configs
        ...jsSpecificRules, // Rules specific to JS
      },
    },
  ],
};
