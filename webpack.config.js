const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports = {
    entry: '/client/index.js', //entry point of our application
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'builds')
    },
    mode: 'development',
    plugins: [new HtmlWebpackPlugin({
        template: './index.html'
    }), new Dotenv],
    module:{
        rules: [
            {
                test: /\.(?:js|mjs|cjs|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: [
                        ['@babel/preset-env', { targets: "defaults" }], '@babel/preset-react',
                      ]
                    }
                }
            },
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, './server/'),
        },
        compress: true,
        port: 8080,
        proxy: [
            {
                context: ['/'],
                target: 'http://localhost:3000',
                changeOrigin: true,
            }
        ]
    }
};