const path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin")
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
    entry : {
        main : "./src/index.js",
        vendor : "./src/vendor.js"
    },
    plugins: [new htmlWebpackPlugin({
        template: "./src/index.html"
        }),   new FaviconsWebpackPlugin('./src/assets/icon/favicon.png')],
    module:{
        rules:[
            {
                test: /\.html$/,
                use: {
                    loader : "html-loader",
                    options: {
                        esModule : true,
                    }
                }
            },
            {
                test: /\.(svg|png|jpeg|jpg|gif)$/,
                use:{
                    loader: "file-loader",
                    options: {
                        name : "[name].[hash].[ext]",
                        output : "assets"
                    }
                }
            }
        ]
    }
}