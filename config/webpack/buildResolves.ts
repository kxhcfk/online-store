import webpack from "webpack";
import {BuildOptions} from "./types/config";

const buildResolves = (options: BuildOptions): webpack.ResolveOptions => {
    return {
        extensions: [".tsx", ".ts", ".js"],
    };
};

export {buildResolves};