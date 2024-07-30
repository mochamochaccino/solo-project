const path = require('path');


module.exports = {
    entry: '/client/index.js', //entry point of our application
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'builds')
    },
    mode: 'development',
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
                target: 'http://localhost:3000'
            }
        ]
    }
};