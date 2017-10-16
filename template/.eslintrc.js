var path = require('path');

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true
    },
    extends: 'airbnb-base',
    plugins: [
        'html'
    ],
    'settings': {
        'import/resolver': {
            'webpack': {
                'config': 'webpack/webpack.resolve.conf.js'
            }
        }
    },
    'rules': {
        'indent': ['error', 4],
        'no-new': 'off',
        'no-shadow': 'off',
        'max-len': ['error', 150],
        'no-param-reassign': ['error', {
            'props': false
        }],
        'import/extensions': ['error', 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
};
