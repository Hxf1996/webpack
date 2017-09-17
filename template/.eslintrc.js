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
                'config': 'webpack/webpack.base.conf.js'
            }
        }
    },
    'rules': {
        "indent": [
            "error",
            4
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-tabs": "off",
        "no-new": "off",
        "no-shadow": "off",
        "max-len": [
            "error",
            150
        ],
        'no-param-reassign': [
            'error',
            {
                'props': false
            }
        ],
        'import/extensions': [0, 'always', {
            'js': 'never',
            'vue': 'never'
        }],
        'import/no-unresolved': 0,
        'import/no-duplicates': 0,
        'import/no-named-as-default': 0,
        'import/no-named-as-default-member': 0,
        'import/no-extraneous-dependencies': 0
    }
};
