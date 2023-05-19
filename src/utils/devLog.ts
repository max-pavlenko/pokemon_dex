type DevLogParams = {prefix?: string, msg: any};

export function devLog({prefix = '', msg}: DevLogParams) {
    if (process.env.NODE_ENV === 'development') console.log(prefix, msg);
}
