interface classNamesProps extends Array<null | undefined | string | boolean> {}

const classNames = (...classes: classNamesProps) => {
    return classes.filter(Boolean).join(" ");
}

export {classNames, classNamesProps};