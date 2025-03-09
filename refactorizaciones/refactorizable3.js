const orders = [
    { id: 1, customer: 'Juan Pérez', items: ['Laptop', 'Mouse'], total: 1050, status: 'pending' },
    { id: 2, customer: 'María Gómez', items: ['Phone', 'Headphones'], total: 600, status: 'completed' },
    { id: 3, customer: 'Carlos López', items: ['Shirt', 'Pants'], total: 70, status: 'pending' }
];

function printOrder(order) {
    const details = {
        'ID': order.id,
        'Cliente': order.customer,
        'Productos': order.items.join(', '),
        'Total': `$${order.total}`,
        'Estado': order.status
    };

    Object.entries(details).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
    console.log('----------------------');
}

const orderActions = {
    pending: {
        process: order => {
            console.log('Enviando email de confirmación...');
            console.log('Pedido en preparación.');
        },
        email: order => {
            console.log(`Enviando email de recordatorio para pedido PENDIENTE ID ${order.id}`);
        },
        notification: order => {
            console.log('Notificación push: Su pedido pendiente aún está en proceso.');
        },
        status: order => {
            console.log('Estado actualizado: Pedido sigue en preparación.');
        }
    },
    completed: {
        process: order => {
            console.log('Verificando que ya fue enviado...');
            console.log('Enviando encuesta de satisfacción.');
        },
        email: order => {
            console.log(`Enviando email de agradecimiento para pedido COMPLETADO ID ${order.id}`);
        },
        notification: order => {
            console.log('Notificación push: Gracias por su compra. Su pedido ha sido entregado.');
        },
        status: order => {
            console.log('Estado actualizado: Pedido marcado como completado.');
        }
    }
};

function processOrder(order) {
    const actions = orderActions[order.status];
    console.log(`Procesando pedido ${order.status.toUpperCase()} ID ${order.id} de ${order.customer}`);
    actions.process(order);
    actions.status(order);
    console.log('----------------------');
}

function sendOrderEmail(order) {
    const actions = orderActions[order.status];
    actions.email(order);
    actions.notification(order);
}

function main() {
    console.log('Procesando pedidos:');
    orders.forEach(order => {
        printOrder(order);
        processOrder(order);
        sendOrderEmail(order);
        console.log('----------------------');
    });
}

main();