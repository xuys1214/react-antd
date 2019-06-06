const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: [
            path.join(__dirname, '../src/index.js'),
        ],
        vendor: ['react', 'react-router-dom']
    },
    mode: 'production',
    output: {
        filename: "[name].[hash:8].js",
        path: path.resolve("./dist"),
        chunkFilename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            /*src目录下面的以.js结尾的文件，要使用babel解析*/
            /*cacheDirectory是用来缓存编译结果，下次编译加速*/
            {
                test: /\.js$/,
                use: ['babel-loader?cacheDirectory=true'],
                include: path.join(__dirname, '../src')
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader', "postcss-loader"]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            hash: true,                 //清缓存用
        }),
    ]

};