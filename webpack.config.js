const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        mainPage: './mainPage/src/index.js',
        stockPage: './stock/src/index.js',
        deliveryPage: './delivery/src/index.js',
        aboutPage: './about/src/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        chunkFilename: '[name].styles.css',
        publicPath: '/',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: false },
                    }
                ]
            },
            {
                test: /\.svg$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'img/',
                        publicPath: '/img/'
                    }
                }
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './mainPage/src/index.html',
            filename: './index.html',
            chunks: ['mainPage'],
        }),
        new HtmlWebPackPlugin({
            template: './stock/src/index.html',
            filename: './stock.html',
            chunks: ['stockPage'],
        }),
        new HtmlWebPackPlugin({
            template: './delivery/src/index.html',
            filename: './delivery.html',
            chunks: ['deliveryPage'],
        }),
        new HtmlWebPackPlugin({
            template: './about/src/index.html',
            filename: './about.html',
            chunks: ['aboutPage'],
        }),
        
        new MiniCssExtractPlugin({
            filename: '[name].styles.css'
        }),
    ],
    devServer: {
        compress: true,
        port: 3000,
    },
};