const  path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");

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

const HWPConfig = new HTMLWebpackPlugin({
    template: path.resolve(__dirname, './src/pug/pages/index.pug'),
    inject: false,
    minify: isProd,
    filename: 'index.html'
});

const htmlPages = ['index', 'header&footer', 'colors-and-types'];
const multiplesHtml = htmlPages.map(function(entryName) {
    return new HTMLWebpackPlugin({
        filename: entryName + '.html',
        template: path.resolve(__dirname, `./src/pug/pages/${entryName}.pug`),
        inject: false,
    });
});

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
    resolve: {
        extensions: ['.js', '.scss', '.pug'],
        modules: ['node_modules']
    },
    optimization: optimization(),
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
                    {
                        loader: 'css-loader',
                        options: { sourceMap: isDev }
                    },
                    'postcss-loader',
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
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        HWPConfig,
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
    ].concat(multiplesHtml),
    devServer: {
        port: 3000,
        hot: isDev
    },
};