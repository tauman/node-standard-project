module.exports = {
    'env': {
        'node': true,
        'jasmine': true,
        'es6': true
    },
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module',
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true
        }
    },
    'extends': 'eslint:recommended',
    'rules': {
        'no-console': 'off',
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single', {
                'allowTemplateLiterals': true,
                'avoidEscape': true
            }
        ],
        'semi': [
            'error',
            'always'
        ]
    }
};
