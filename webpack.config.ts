import {BuildEnv, BuildPaths} from "./config/webpack/types/config";
import webpack from "webpack";
import {buildWebpackConfig} from "./config/webpack/buildWebpackConfig";
import path from "path";

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
        assets: {
            icons: path.resolve(__dirname, "src", "shares", "assets", "icons"),
        },
    };
    
    const mode = env.mode || "development";
    const port = env.port || 3000;
    
    const isDev = mode === "development";
    
    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port,
    });
    
    return config;
}