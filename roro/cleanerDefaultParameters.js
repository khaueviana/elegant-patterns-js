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

function findUsersByRole ({
    role = requiredParam('role'),
    withContactInfo, 
    includeInactive
  } = {}) {
      console.log(role);
  }

  findUsersByRole({role: 'X'});

  findUsersByRole({withContactInfo: 'X'});