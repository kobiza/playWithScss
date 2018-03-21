var path = require('path');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
        filename: 'main.js'
    },
    devServer: {
        // contentBase: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                include : path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                include : path.resolve(__dirname, 'src'),
                loaders: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'resolve-url-loader',
                    'sass-loader' // compiles Sass to CSS
                ]

            }
        ]
    }
};
