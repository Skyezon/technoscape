const path = require("path");
const common = require("./webpack.common.js");
const {merge} = require("webpack-merge")
module.exports = merge(common,{
    mode: "development",
    devtool: "eval",
    module : {
        rules : [
            {
                test: /\.scss$/,
                use : ["style-loader","css-loader","sass-loader"]
            },
        ]

    },
    output : {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname,"dist")
    }
});