const path = require('path');
// cssをファイルのバンドル＆作成するプラグイン
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//　htmlファイルにcssを自動で書き込んでくれるプラグイン
const HtmlWebpackPlugin = require('html-webpack-plugin');
// distディレクトリを整理整頓するプラグイン{}はこの中のこの部分だけ使いますよの宣言
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/javascript/main.js',
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'javascript/main.js',
    },

    module: {
        rules: [
            {
                test: /\.css/,
                use: [
                    {
                        // htmlの中にスタイルシートを差し込む
                        // loader: 'style-loader'
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        // cssをjsに読み込む
                        loader: 'css-loader',
                    },
                ],
            },
            // 画像
            {
                test: /\.(png|jpg)/,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[ext]',
                },
                use: [
                    // {
                    //     loader: 'file-loader',
                    //     options: {
                    //         esModule: false,
                    //         // ファイル名の指定
                    //         name: 'images/[name].[ext]',
                    //     },
                    // },
                ],
            },
        ],
    },

    plugins: [
        // プラグインのインスタンス化
        new MiniCssExtractPlugin({
            // 出力ファイル名の指定
            filename: './stylesheets/main.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
        }),
        new CleanWebpackPlugin(),
    ],
}
