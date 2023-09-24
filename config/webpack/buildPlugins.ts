import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
    const {isDev} = options;
    
    const plugins: webpack.WebpackPluginInstance[] = [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: options.paths.html,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[contenthash:8].css",
            chunkFilename: "css/[name].[contenthash:8].css",
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: isDev
        })
    ];
    
    if (isDev) {
        plugins.push(new webpack.HotModuleReplacementPlugin());
        plugins.push(new ReactRefreshPlugin());
    }
    
    return plugins;
};

export {buildPlugins};