const users = [
    { firstName: 'Juan', lastName: 'Pérez', age: 30, email: 'juan@example.com', role: 'user' },
    { firstName: 'María', lastName: 'Gómez', age: 25, email: 'maria@example.com', role: 'admin' }
];

function getUserFullName(user) {
    return user.firstName + ' ' + user.lastName;
}

function getAdminFullName(admin) {
    return admin.firstName + ' ' + admin.lastName;
}

function printUserDetails(user) {
    console.log('Nombre: ' + getUserFullName(user));
    console.log('Edad: ' + user.age);
    console.log('Email: ' + user.email);
    console.log('Rol: ' + user.role);
    console.log('----------------------');
}

function printAdminDetails(admin) {
    console.log('Nombre: ' + getAdminFullName(admin));
    console.log('Edad: ' + admin.age);
    console.log('Email: ' + admin.email);
    console.log('Rol: ' + admin.role);
    console.log('----------------------');
}

function logUserEmail(user) {
    console.log('Email del usuario: ' + user.email);
}

function logAdminEmail(admin) {
    console.log('Email del administrador: ' + admin.email);
}

function main() {
    console.log('Detalles de los usuarios:');
    users.forEach(user => {
        if (user.role === 'user') {
            printUserDetails(user);
            logUserEmail(user);
        } else if (user.role === 'admin') {
            printAdminDetails(user);
            logAdminEmail(user);
        }
    });
}

main();
