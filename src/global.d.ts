declare module "*.scss" {
    const classes: { [key: string]: string };
    // eslint-disable-next-line import/no-default-export
    export default classes;
}

declare module "*.module.scss" {
    const classes: { [key: string]: string };
    // eslint-disable-next-line import/no-default-export
    export default classes;
}
