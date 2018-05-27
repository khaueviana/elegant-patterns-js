function requiredParam(param) {
    const requiredParamError = new Error(
        `Required parameter, "${param}" is missing.`
    )
    // // preserve original stack trace
    // if (typeof Error.captureStackTrace === 'function') {
    //     Error.captureStackTrace(
    //         requiredParamError,
    //         requiredParam
    //     )
    // }
    throw requiredParamError
}

function pipe(...fns) {
    return param => fns.reduce((result, fn) => fn(result), param)
}

function saveUser(userInfo) {
    return pipe(
        validate,
        normalize,
        persist
    )(userInfo)
}

function validate({
    id,
    firstName,
    lastName,
    email = requiredParam(),
    username = requiredParam(),
    pass = requiredParam(),
    address,
    ...rest
}) {
    // do some validation
    return {
        id,
        firstName,
        lastName,
        email,
        username,
        pass,
        address,
        ...rest
    }
}
function normalize({
    email,
    username,
    ...rest
}) {
    // do some normalizing
    return {
        email,
        username,
        ...rest
    }
}

function persist({
    upsert = true,
    ...info
}) {
    // save userInfo to the DB
    return {
        operation,
        status,
        saved: info
    }
}

saveUser({ email: 'x' })