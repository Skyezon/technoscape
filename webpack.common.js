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
        }),   new FaviconsWebpackPlugin({
        logo : './src/assets/icon/favicon.png',
        favicons: {
            appName: 'Technoscape',
            appDescription : 'Event teknologi terbesar BNCC yang berfokus memberikan dampak sosial kepada masyarakat melalui event-event teknologi yang inovatif. Transforming Digital Knowledge to Innovative Solutions',
            theme_color : "#122B5E",
            developerName : 'BNCC'
        }
        })],
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