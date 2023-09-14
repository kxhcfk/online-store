import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";
import webpack from "webpack";

const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const {isDev} = options;
    
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    
    const styleLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (path: string) => path.includes('.module.'),
                        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:5]",
                    },
                }
            },
            "sass-loader",
        ],
    };
    
    return [
        typescriptLoader,
        styleLoader,
    ];
};

export {buildLoaders};