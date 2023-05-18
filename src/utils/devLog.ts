export function devLog({prefix = '', msg}: {prefix?: string, msg: any}) {
    if (process.env.NODE_ENV === 'development') console.log(prefix, msg);
}
