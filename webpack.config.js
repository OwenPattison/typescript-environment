const { resolve } = require("path");

const HtmlTextPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const buildPath = resolve(__dirname, "dist");

const isDevelopment = process.env.NODE_ENV === "development";

module.exports = {
    devServer: {
        compress: true,
        contentBase: buildPath,
        historyApiFallback: true,
        port: 3000
    },
    entry: {
        app: "./src/index.tsx"
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: "ts-loader"
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.module.scss$/,
                loader: [
                    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            sourceMap: isDevelopment
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: isDevelopment
                        }
                    }]
            },
            {
                test: /\.scss$/,
                exclude: /\.module.scss$/,
                loader: [
                    isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: isDevelopment
                        }
                    }]
            }
        ]
    },
    output: {
        chunkFilename: "scripts/[name]-[contenthash].js",
        filename: "scripts/[name]-[contenthash].js",
        path: buildPath,
        publicPath: "/"
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: isDevelopment ? "styles/[name].css" : "styles/[name].[contenthash].css",
            chunkFilename: isDevelopment ? "styles/[id].css" : "styles/[id].[contenthash].css"
        }),
        new HtmlTextPlugin({
            filename: "index.html",
            template: "public/index.html"
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".scss"]
    }
};
