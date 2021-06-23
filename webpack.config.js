const  path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
    const config = {};
    if (isProd){
        config.minimizer = [
            new OptimizeCssAssetsPlugin(),
            new TerserPlugin()
        ]
    }
    return config;
};

module.exports = {
    context: path.resolve(__dirname, "src"),
    mode: "development",
    entry: {
        main: "./index.js",
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        port: 3000,
        hot: isDev
    },
    optimization: optimization(),
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
                template: "./pug/pages/index.pug",
            minify: {
                    collapseWhitespace: isProd
            }
        }),
        new HtmlWebpackPugPlugin({
            adjustIndent: true
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src/img/'),
                    to: path.resolve(__dirname, 'dist/img/'),
                    noErrorOnMissing: true,
                },
                {
                    from: path.resolve(__dirname, 'src/fonts/'),
                    to: path.resolve(__dirname, 'dist/fonts/'),
                    noErrorOnMissing: true,
                },
            ]
        }),
        new MiniCssExtractPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: [
                    'raw-loader',
                    'pug-plain-loader',
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/,
                use: ["file-loader"]
            }
        ]
    }
}