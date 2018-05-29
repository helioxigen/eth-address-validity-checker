const path = require("path")

module.exports = {
    entry: ["./src/index.js"],

    output: {
        path: path.resolve(__dirname, "public"),
        filename: "bundle.js",
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.join(__dirname, "src"),
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        targets: ["> 1%"]
                                    }
                                ],
                                "@babel/preset-react"
                            ],
                            plugins: [
                                "@babel/plugin-proposal-class-properties"
                            ],
                            cacheDirectory: true
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },

    resolve: {
        extensions: [".js", ".jsx"]
    },

    devtool: process.env.NODE_ENV === "production" ? "nosources-source-map" : "eval-source-map",

    devServer: {
        port: 3000,
        contentBase: path.join(__dirname, "public/"),
        watchOptions: {
            ignored: /node_modules|public/
        }
    }
}
