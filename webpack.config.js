const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: ["@babel/polyfill", "./index.jsx"],
    resolve: {
        extensions: ['.js','.jsx', '.json', '.wasm'],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, // обновляем регулярное выражение для поддержки jsx
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                        presets: ["@babel/preset-react", "@babel/preset-env"]
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./index.html"
        }),
        new FileManagerPlugin({
            events: {
                onStart: {
                    delete: ['dist'],
                },
            },
        }),
    ]
}