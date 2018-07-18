const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let conf = {
    plugins: [
        new HTMLPlugin(),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    "css-loader"
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    {loader: 'file-loader', options: {outputPath: 'images/'}}
                ],
            }
        ]
    }
};

if (process.env.WEBPACK_SERVE) {
    conf.mode = 'development';
    conf.devtool = 'source-map';
}

module.exports = conf