module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true
    },
    parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2017
    },
    extends: [
        'airbnb-base',
    ],
    rules: {
        'padded-blocks': 'off',
        'comma-dangle': 'off',
        indent: [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'max-len': [
            'error',
            {
                code: 120,
                comments: 120
            }
        ],
        'no-restricted-syntax': [
            'error',
            'ForInStatement',
            'LabeledStatement',
            'WithStatement'
        ]
    }
};
