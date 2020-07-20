const path = require("path");
const common = require("./webpack.common.js")
const {merge} = require("webpack-merge")
const {CleanWebpackPlugin} = require("clean-webpack-plugin")
const miniCssExtractPlugin = require("mini-css-extract-plugin")
const optimize = require("optimize-css-assets-webpack-plugin")
const terserPlugin = require("terser-webpack-plugin")
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
                use : [miniCssExtractPlugin.loader,"css-loader","postcss-loader","sass-loader"]
            }
        ]
    }
});