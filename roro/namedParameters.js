const options = {
    role: 'Admin',
    includeInactive: true
}

function findUsersByRole({
    role,
    withContactInfo,
    includeInactive
} = {}) {
    role = role.toLowerCase()
    console.log(role) // 'admin'
}

console.log(options.role) // 'Admin'