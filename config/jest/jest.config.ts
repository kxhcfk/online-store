import {JestConfigWithTsJest} from "ts-jest";

const config: JestConfigWithTsJest = {
    preset: "ts-jest",
    clearMocks: true,
    coveragePathIgnorePatterns: [
        "\\\\node_modules\\\\",
    ],
    testEnvironment: "jsdom",
    moduleDirectories: [
        "node_modules",
    ],
    moduleFileExtensions: [
        "js",
        "jsx",
        "ts",
        "tsx",
        "json",
        "node",
    ],
    rootDir: "../../",
    testMatch: [
        "<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)",
    ],
};

export default config;