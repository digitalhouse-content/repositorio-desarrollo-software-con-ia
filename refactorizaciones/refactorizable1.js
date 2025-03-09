const users = [
    { firstName: 'Juan', lastName: 'Pérez', age: 30, email: 'juan@example.com', role: 'user' },
    { firstName: 'María', lastName: 'Gómez', age: 25, email: 'maria@example.com', role: 'admin' }
];

function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}

function printPersonDetails(person) {
    const details = {
        'Nombre': getFullName(person),
        'Edad': person.age,
        'Email': person.email,
        'Rol': person.role
    };

    Object.entries(details).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
    console.log('----------------------');
}

function logEmail(person) {
    const roleText = person.role === 'admin' ? 'administrador' : 'usuario';
    console.log(`Email del ${roleText}: ${person.email}`);
}

function main() {
    console.log('Detalles de los usuarios:');
    users.forEach(user => {
        printPersonDetails(user);
        logEmail(user);
    });
}

main();
