const products = [
    { name: 'Laptop', price: 1000, category: 'Electronics' },
    { name: 'Phone', price: 500, category: 'Electronics' },
    { name: 'Shirt', price: 30, category: 'Clothing' },
    { name: 'Pants', price: 40, category: 'Clothing' }
];

const DISCOUNT_RATES = {
    'Electronics': 0.9,
    'Clothing': 0.85
};

function printProduct(product) {
    const details = {
        'Producto': product.name,
        'Precio': `$${product.price}`,
        'Categoría': product.category
    };

    Object.entries(details).forEach(([key, value]) => {
        console.log(`${key}: ${value}`);
    });
}

function calculateDiscount(product) {
    const discountRate = DISCOUNT_RATES[product.category];
    return product.price * discountRate;
}

function showDiscountedPrice(product) {
    console.log(`Descuento aplicado: $${calculateDiscount(product)}`);
}

function main() {
    console.log('Lista de productos:');
    products.forEach(product => {
        printProduct(product);
        showDiscountedPrice(product);
        console.log('----------------------');
    });
}

main();