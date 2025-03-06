const orders = [
    { id: 1, customer: 'Juan Pérez', items: ['Laptop', 'Mouse'], total: 1050, status: 'pending' },
    { id: 2, customer: 'María Gómez', items: ['Phone', 'Headphones'], total: 600, status: 'completed' },
    { id: 3, customer: 'Carlos López', items: ['Shirt', 'Pants'], total: 70, status: 'pending' }
];

function printOrder(order) {
    console.log('ID: ' + order.id);
    console.log('Cliente: ' + order.customer);
    console.log('Productos: ' + order.items.join(', '));
    console.log('Total: $' + order.total);
    console.log('Estado: ' + order.status);
    console.log('----------------------');
}

function processOrder(order, processCallback, statusCallback) {
    console.log(`Procesando pedido ${order.status.toUpperCase()} ID ${order.id} de ${order.customer}`);
    processCallback(order);
    statusCallback(order);
    console.log('----------------------');
}

function sendOrderEmail(order, emailCallback, notificationCallback) {
    emailCallback(order);
    notificationCallback(order);
}

const pendingOrderProcessing = order => {
    console.log('Enviando email de confirmación...');
    console.log('Pedido en preparación.');
};

const completedOrderProcessing = order => {
    console.log('Verificando que ya fue enviado...');
    console.log('Enviando encuesta de satisfacción.');
};

const pendingOrderEmail = order => {
    console.log('Enviando email de recordatorio para pedido PENDIENTE ID ' + order.id);
};

const completedOrderEmail = order => {
    console.log('Enviando email de agradecimiento para pedido COMPLETADO ID ' + order.id);
};

const pendingOrderNotification = order => {
    console.log('Notificación push: Su pedido pendiente aún está en proceso.');
};

const completedOrderNotification = order => {
    console.log('Notificación push: Gracias por su compra. Su pedido ha sido entregado.');
};

const pendingOrderStatus = order => {
    console.log('Estado actualizado: Pedido sigue en preparación.');
};

const completedOrderStatus = order => {
    console.log('Estado actualizado: Pedido marcado como completado.');
};

function main() {
    console.log('Procesando pedidos:');
    orders.forEach(order => {
        printOrder(order);
        if (order.status === 'pending') {
            processOrder(order, pendingOrderProcessing, pendingOrderStatus);
            sendOrderEmail(order, pendingOrderEmail, pendingOrderNotification);
        } else if (order.status === 'completed') {
            processOrder(order, completedOrderProcessing, completedOrderStatus);
            sendOrderEmail(order, completedOrderEmail, completedOrderNotification);
        }
    });
}

main();