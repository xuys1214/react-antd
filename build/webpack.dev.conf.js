const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: [
            "@babel/polyfill",
            path.join(__dirname, '../src/index.js'),
        ],
        vendor: ['react', 'react-router-dom', 'redux', 'react-dom', 'react-redux']
    },
    mode: 'development',
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
        new CleanWebpackPlugin(),
    ],
    devServer: {
        // contentBase: path.join(__dirname, '../dist'),  // 一般不配置
        contentBase: "./dist",           //指定打开的页面
        compress: true,             // gzip压缩
        host: '0.0.0.0',            // 允许访问IP
        hot: true,                  // 热更新
        historyApiFallback: true,   // 解决启动后刷新404
        port: 8088,                 // 端口
        /* 代理
        proxy: {
            'api': {
                target: 'http://localhost:8000',
                pathRewrite: {'^api': ''},  // 转换api为空
                changeorigin: true  // 解决跨域问题
            }
        }
        */
    }

};