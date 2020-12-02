// webpack默认配置
const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 打包入口文件
    entry: './src/index.js',
    // 打包后生成文件的目录
    output: {
        // 指定路径（绝对路径）
        path: path.resolve(__dirname, './dist'),
        // 文件名称 
        filename: 'main.js'
    },
    // 打包模式 默认生产模： production，开发模式：development
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader']
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html'
        })
    ]
}