var webpack = require("webpack");
const path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

module.exports =
    {
        entry: {
            app: './src/index.js'
        },
        module: {
            loaders: [
                {
                    test: /\.scss$/,
                    loaders: ["style-loader", "css-loader", "sass-loader"]
                },
                {
                    test: /\.css/,
                    loaders: ["style-loader", "css-loader"]
                },
                {
                    test: /\.jsx?$/,
                    loader: 'babel-loader'
                },
                { test: /\.json$/, loader: 'json-loader' },
                {
                    test: /\.(woff|eot|ttf|otf|svg)$/,
                    loader: "url-loader"
                }
            ]
        },
        resolve: {
            root: path.resolve('.'),
            modulesDirectories: ['node_modules'],
            extensions: ['', '.js', '.jsx', '.json'],
            alias: {
            }
        },
        plugins: [
            new HtmlwebpackPlugin({
                template: path.join(__dirname + '/src/index.html')
                , inject: 'body'
                , minify: {
                    minifyCSS: true,
                    removeComments: true,
                    collapseWhitespace: true
                }
            })
        ]
    }
;
