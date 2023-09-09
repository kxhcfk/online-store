import webpack from "webpack";
import {buildDevServer} from "./buildDevServer";
import {buildResolves} from "./buildResolves";
import {buildLoaders} from "./buildLoaders";
import {buildPlugins} from "./buildPlugins";
import {BuildOptions} from "./types/config";

const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {paths, mode, isDev} = options;
    
    return {
        mode: mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        devtool: isDev ? "inline-source-map" : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
        resolve: buildResolves(options),
        module: {
            rules: buildLoaders(options),
        },
        plugins: buildPlugins(options),
    };
};

export {buildWebpackConfig};