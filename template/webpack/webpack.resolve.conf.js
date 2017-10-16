var path = require('path');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

var resolveConfig = {
    resolve: {
        extensions: ['.js', '.vue', '.json', '.css'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    }
};

module.exports = resolveConfig;
