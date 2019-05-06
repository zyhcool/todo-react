var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './src/index.tsx'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    devtool: "eval-source-map",
    devServer: {
        contentBase: "./build",
        historyApiFallback: true,
        inline: true,
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js|\.ts|\.tsx)$/,
                use: [{
                    loader: "babel-loader",
                }, {
                    loader: "ts-loader",
                }],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader",
                }, {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        localIdentName: "[name]__[local]"
                    }
                }]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        modules: ['src', 'node_modules'],
    }, // 这个是什么鬼啊 ！！！！
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "_index.html",
        }),
    ],
};