type Pipe = <T extends any, R>(
    fn1: (...args: T[]) => R,
    ...fns: ((arg: R) => R)[]
) => (...args: T[]) => R

const pipe: Pipe =
    (func1, ...funcs) =>
    (args) =>
        funcs.reduce((arg, func) => func(arg), func1(args))

export default pipe
