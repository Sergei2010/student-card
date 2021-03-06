module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'standard',
        'plugin:react-hooks/recommended',
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        semi: [2, 'never'],
        indent: [0, 4],
        'space-before-function-paren': [
            'error',
            { anonymous: 'always', named: 'never' },
        ],
        quotes: [
            'error',
            'single',
            {
                allowTemplateLiterals: true,
            },
        ],
    },
};
