var webpack = require('webpack');
var path    = require('path');
var config  = require('./webpack.config');
var UglifyJs = require('uglify-js');

config.devtool = 'eval';

config.output = {
    filename: 'js/[name].[chunkhash:6].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[chunkhash:8].js',
    path: path.resolve(__dirname, 'build')
};

config.plugins = config.plugins.concat([
    // new webpack.optimize.UglifyJsPlugin({
    //     compress: {
    //         warnings: false
    //     },
    //     output: {
    //         comments: false
    //     },
    //     sourceMap: false
    // }),
    // new webpack.DefinePlugin({
    //     'process.env': {
    //         NODE_ENV: JSON.stringify('production')
    //     }
    // }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vender',
        minChunks: function (module, count) {
            // any required modules inside node_modules are extracted to vendor
            return (
                module.resource &&
                /\.js$/.test(module.resource) &&
                module.resource.indexOf(
                    path.join(__dirname, 'node_modules')
                ) === 0
            );
        }
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: 'common',
        chunks: ['vender']
    })
]);

module.exports = config;
