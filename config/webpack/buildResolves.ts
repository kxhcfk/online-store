import webpack from "webpack";
import {BuildOptions} from "./types/config";

const buildResolves = (options: BuildOptions): webpack.ResolveOptions => {
    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [
            options.paths.assets.icons,
            options.paths.src,
            "node_modules",
        ],
        alias: {
            "@/icons": options.paths.assets.icons,
            "@": options.paths.src,
        },
    };
};

export {buildResolves};