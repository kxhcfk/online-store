import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";
import webpack from "webpack";

const buildLoaders = (options: BuildOptions): webpack.RuleSetRule[] => {
    const {isDev} = options;
    
    const fileLodaer: webpack.RuleSetRule = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    }
    
    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };
    
    const typescriptLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };
    
    const styleLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? "style-loader" : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (path: string) => path.includes(".module."),
                        localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64:5]",
                    },
                },
            },
            "sass-loader",
        ],
    };
    
    return [
        typescriptLoader,
        styleLoader,
        svgLoader
    ];
};

export {buildLoaders};