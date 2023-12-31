declare module "*.scss" {
    const content: Record<string, string>;
    export default content;
}

declare module "*.svg" {
    const svg: React.FunctionComponent<React.SVGAttributes<SVGAElement>>;
    export default svg;
}

declare const __IS_DEV__: boolean;

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";