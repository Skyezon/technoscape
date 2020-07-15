const path = require("path");
var htmlWebpackPlugin = require("html-webpack-plugin")
module.exports = {
    entry : {
        main : "./src/index.js",
        vendor : "./src/vendor.js"
    },
    plugins: [new htmlWebpackPlugin({
        template: "./src/index.html"
    })],
    module:{
        rules:[

            {
                test: /\.html$/,
                use: ["html-loader"]
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