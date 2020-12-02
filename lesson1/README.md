## step 1

初始化项目

    npm init

## step 2

开发环境安装指定版本的webpack，cli，server

    npm i -D webpack@4.43.0 webpack-cli@3.3.12 webpack-dev-server@3.11.0

## step 3

创建源码目录：

创建src目录，在src目录下新建index.js文件

## step 4

执行打包 (webpack 4.X 0配置)

1、npx命令启动webpack

npx: npm内置

    npx webpack

    1 查到当前项目node_modules目录并找bin目录的软连接找webpack并且启动
    2 没有webpack，直接下载webpack

2、npm命令启动webpack

package.json文件中的scripts对象里增加dev并指定webpack

和npx一样的查找，但是没有webpack的时候不会帮助下载webpack

    npm run dev

    scripts: {
        "dev": "webpack"
    }

## step 5

项目里新建了个dist目录

dist目录为webpack打包后默认的文件目录

# 核心概念

entry: 打包入口文件

    单入口
        entry: './src/index.js'
        entry: ['./src/index.js', './src/home.js']

    多入口: 
        entry: {
            index: './src/index.js',
            home: './src/home.js',
            list: './src/list.js'
        }

output: 打包输出目录

    单入口：(默认配置)
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: 'main.js'
        }

    多入口：[name]占位符(多个文件相同名字)
        output: {
            path: path.resolve(__dirname, './dist'),
            filename: '[name].js'
        }

mode: 打包模式

    production: 
        生产模式，打包后的代码压缩
        chunks 为0

    development:
        开发模式，打包后的代码未压缩
        chunks 为入口key值

    none:
        不使用任何默认优化选项，打包后的代码未压缩
        chunks 为0

loader: 对模块的源代码进行转换(翻译)

为了让webpack支持更多类型的文件

    配置方式:(推荐)
        在 webpack.config.js 文件中指定 loader
        module: {
            rules:[
                {
                    text: /\.css$/,
                    // 多个loader作用于一个模块，数组格式
                    // loader执行顺序，从右到左
                    // use: ['style-loader', 'css-loader']
                    use: [
                        {
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true
                            }
                        },
                        {
                            loader: 'less-loader'
                        }
                    ]
                }
            ]
        }

    内联方式:
        在每个 import 语句中显式指定 loader
        import Styles from 'style-loader!css-loader?modules!./styles.css'

    CLI方式:
        在 shell 命令中指定它们

plugin: 功能拓展

    plugins: [
        new CleanWebpackPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.js',
            filename: 'index.html'
        })
    ]

bundle: 打包后的成果文件

    一个bundle对应一个chunk

chunk: 打包后的代码片段(入口文件定义)

    一个chunk对应一个或者多个module
