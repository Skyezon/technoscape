const path = require("path");
const common = require("./webpack.common.js")
const {merge} = require("webpack-merge")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const optimize = require("optimize-css-assets-webpack-plugin")
const terserPlugin = require("terser-webpack-plugin")
const autoprefixer = require("autoprefixer")
module.exports = merge(common,{
    mode: "production",
    plugins : [new miniCssExtractPlugin({filename: "[name].[contentHash].css"}),new CleanWebpackPlugin()],
    output : {
        filename: "[name].[contentHash].bundle.js",
        path: path.resolve(__dirname,"dist")
    },
    optimization : {
      minimizer : [new optimize(), new terserPlugin()],
    },
    module : {
        rules : [
            {

                test: /\.scss$/,
                use : [miniCssExtractPlugin.loader,{
                    loader : "css-loader",
                    options: {
                        importLoaders : 1

                    }
                }, {
                    loader : "postcss-loader",
                    options : {
                        ident : 'postcss',
                        plugins : [
                            autoprefixer
                        ]
                    }
                },"sass-loader"]
            }
        ]
    }
});