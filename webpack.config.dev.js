var webpack = require('webpack');
var path = require('path');
var config = require('./webpack.config');

// 开发环境调试打开devtool
config.devtool = 'eval';

config.output = {
    filename: 'js/[name].[chunkhash:6].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[chunkhash:8].js',
    path: path.resolve(__dirname, 'build')
};

config.plugins = config.plugins.concat([
    new webpack.HotModuleReplacementPlugin()
]);

config.devServer = {
    contentBase: path.resolve(__dirname, 'src'),
    hot: true,
    inline: true,
    progress: true,
    stats: 'errors-only',
    historyApiFallback: true
};

module.exports = config;
