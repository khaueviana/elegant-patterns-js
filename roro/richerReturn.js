function saveUser({
    upsert = true,
    transaction,
    ...userInfo
}) {
    // save to the DB
    return {
        operation, // e.g 'INSERT'
        status, // e.g. 'Success'
        saved: userInfo
    }
}