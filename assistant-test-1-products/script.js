let id;

document.addEventListener("DOMContentLoaded", () => {
    cargarProductos();
});

function cargarProductos() {
    fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(data => {
            const contenedor = document.getElementById("productos");
            contenedor.innerHTML = "";
            data.forEach(producto => {
                const div = document.createElement("div");
                div.classList.add("producto");
                div.setAttribute("data-id", producto.id);
                div.innerHTML = `
                    <div data-id="${producto.id}">
                    <img src="${producto.image}" alt="${producto.title}">
                    <h2>${producto.title}</h2>
                    <p>${producto.description.substring(0, 100)}...</p>
                    <strong>$${producto.price}</strong>
                    <button onclick="deleteProduct(${producto.id})">Eliminar</button>
                    <button onclick="fillForm(${producto.id})">Editar</button>
                    </div>
                `;
                contenedor.appendChild(div);
            });
        })
        .catch(error => console.error("Error al cargar los productos", error));
}

function addProduct() {
    const product = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value,
        category: document.getElementById("category").value,
        image: document.getElementById("image").value
    };
    fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .then(nuevoProducto => {
            alert("Producto agregado con éxito!");
            const contenedor = document.getElementById("productos");
            const div = document.createElement("div");
            div.classList.add("producto");
            div.setAttribute("data-id", nuevoProducto.id);
            div.innerHTML = `
            <div data-id="${nuevoProducto.id}">
            <img src="${nuevoProducto.image}" alt="${nuevoProducto.title}">
            <h2>${nuevoProducto.title}</h2>
            <p>${nuevoProducto.description.substring(0, 100)}...</p>
            <strong>$${nuevoProducto.price}</strong>
            <button onclick="deleteProduct(${nuevoProducto.id})">Eliminar</button>
            <button onclick="fillForm(${nuevoProducto.id})">Editar</button>
            </div>
        `;
            contenedor.appendChild(div);
            document.querySelector(".form-agregar").style.display = "block";
            document.querySelector(".form-editar").style.display = "none";
            document.getElementById("title").value = "";
            document.getElementById("price").value = "";
            document.getElementById("description").value = "";
            document.getElementById("category").value = "";
            document.getElementById("image").value = "";
        })
        .catch(error => console.error("Error al agregar producto", error));
}

function deleteProduct(id) {
    fetch(`https://fakestoreapi.com/products/${id}`, {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(() => {
            alert("Producto eliminado");
            document.querySelector(`[data-id='${id}']`).remove();
        })
        .catch(error => console.error("Error al eliminar producto", error));
}

function updateProduct() {
    const product = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value,
        category: document.getElementById("category").value,
        image: document.getElementById("image").value
    };
    fetch(`https://fakestoreapi.com/products/${this.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
    })
        .then(response => response.json())
        .then(updatedProduct => {
            const div = document.querySelector(`[data-id='${this.id}']`);
            div.innerHTML = `
        <div data-id="${this.id}">
        <img src="${updatedProduct.image}" alt="${updatedProduct.title}">
        <h2>${updatedProduct.title}</h2>
        <p>${updatedProduct.description.substring(0, 100)}...</p>
        <strong>$${updatedProduct.price}</strong>
        <button onclick="deleteProduct(${updatedProduct.id})">Eliminar</button>
        <button onclick="fillForm(${updatedProduct.id})">Editar</button>
        </div>
        `
            document.querySelector(".form-agregar").style.display = "block";
            document.querySelector(".form-editar").style.display = "none";
            document.getElementById("title").value = "";
            document.getElementById("price").value = "";
            document.getElementById("description").value = "";
            document.getElementById("category").value = "";
            document.getElementById("image").value = "";
            document.querySelector(".button-agregar").style.display = "block";
            document.querySelector(".button-editar").style.display = "none";
            alert("Producto actualizado con éxito!");
        })
        .catch(error => console.error("Error al actualizar producto", error));
}

function fillForm(id) {
    this.id = id;
    fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(product => {
            document.getElementById("title").value = product.title;
            document.getElementById("price").value = product.price;
            document.getElementById("description").value = product.description;
            document.getElementById("category").value = product.category;
            document.getElementById("image").value = product.image;
            document.querySelector(".form-agregar").style.display = "none";
            document.querySelector(".form-editar").style.display = "block";
            document.querySelector(".button-agregar").style.display = "none";
            document.querySelector(".button-editar").style.display = "block";
        })
        .catch(error => console.error("Error al llenar el formulario", error));
}