const products = [
    { name: 'Laptop', price: 1000, category: 'Electronics' },
    { name: 'Phone', price: 500, category: 'Electronics' },
    { name: 'Shirt', price: 30, category: 'Clothing' },
    { name: 'Pants', price: 40, category: 'Clothing' }
];

function printElectronicsProduct(product) {
    console.log('Producto: ' + product.name);
    console.log('Precio: $' + product.price);
    console.log('Categoría: ' + product.category);
    console.log('----------------------');
}

function printClothingProduct(product) {
    console.log('Producto: ' + product.name);
    console.log('Precio: $' + product.price);
    console.log('Categoría: ' + product.category);
    console.log('----------------------');
}

function calculateElectronicsDiscount(product) {
    return product.price * 0.9;
}

function calculateClothingDiscount(product) {
    return product.price * 0.85;
}

function showElectronicsDiscountedPrice(product) {
    console.log('Descuento aplicado: $' + calculateElectronicsDiscount(product));
}

function showClothingDiscountedPrice(product) {
    console.log('Descuento aplicado: $' + calculateClothingDiscount(product));
}

function main() {
    console.log('Lista de productos:');
    products.forEach(product => {
        if (product.category === 'Electronics') {
            printElectronicsProduct(product);
            showElectronicsDiscountedPrice(product);
        } else if (product.category === 'Clothing') {
            printClothingProduct(product);
            showClothingDiscountedPrice(product);
        }
    });
}

main();