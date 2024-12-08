/* eslint-disable import/no-anonymous-default-export */
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends('next', 'next/core-web-vitals', 'eslint:recommended'), {
    languageOptions: {
        globals: {
            React: 'readonly',
        },
    },

    ignores:[
        "node_modules/",
        ".hsky/",
        ".next/",
        ".vscode/",
        ".config/*"
    ],

    rules: {
        'no-console': 'warn',
        camelcase: 'warn',
        'no-var': 'error',
        'import/order': 'off',
        'arrow-parens': ['error', 'always'],

        quotes: ['error', 'single', {
            avoidEscape: true,
            allowTemplateLiterals: true,
        }],

        'no-unused-vars': [1, {
            args: 'after-used',
            argsIgnorePattern: '^_',
        }],
    },
}];