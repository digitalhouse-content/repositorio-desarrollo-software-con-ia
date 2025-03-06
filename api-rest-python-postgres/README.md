# API REST con Python y PostgreSQL

## Descripción
Esta es una API RESTful construida con Python y PostgreSQL. Proporciona varios endpoints para interactuar con la base de datos.

## Instalación

### Requisitos
- Docker
- Docker Compose

### Pasos de instalación
1. Clonar el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/api-rest-python-postgres.git
    cd api-rest-python-postgres
    ```

2. Construir y levantar los contenedores de Docker:
    ```bash
    docker-compose up --build
    ```

3. La aplicación estará disponible en `http://localhost:5000`.

## Endpoints

### Obtener todos los elementos
- **URL:** `/items`
- **Método:** `GET`
- **Descripción:** Obtiene una lista de todos los elementos.
- **Respuesta exitosa:**
    ```json
    [
        {
            "id": 1,
            "name": "Item 1",
            "description": "Descripción del Item 1"
        },
        {
            "id": 2,
            "name": "Item 2",
            "description": "Descripción del Item 2"
        }
    ]
    ```

### Obtener un elemento por ID
- **URL:** `/items/{id}`
- **Método:** `GET`
- **Descripción:** Obtiene un elemento específico por ID.
- **Respuesta exitosa:**
    ```json
    {
        "id": 1,
        "name": "Item 1",
        "description": "Descripción del Item 1"
    }
    ```

### Crear un nuevo elemento
- **URL:** `/items`
- **Método:** `POST`
- **Descripción:** Crea un nuevo elemento.
- **Cuerpo de la solicitud:**
    ```json
    {
        "name": "Nuevo Item",
        "description": "Descripción del nuevo item"
    }
    ```
- **Respuesta exitosa:**
    ```json
    {
        "id": 3,
        "name": "Nuevo Item",
        "description": "Descripción del nuevo item"
    }
    ```

### Actualizar un elemento
- **URL:** `/items/{id}`
- **Método:** `PUT`
- **Descripción:** Actualiza un elemento existente.
- **Cuerpo de la solicitud:**
    ```json
    {
        "name": "Item Actualizado",
        "description": "Descripción actualizada"
    }
    ```
- **Respuesta exitosa:**
    ```json
    {
        "id": 1,
        "name": "Item Actualizado",
        "description": "Descripción actualizada"
    }
    ```

### Eliminar un elemento
- **URL:** `/items/{id}`
- **Método:** `DELETE`
- **Descripción:** Elimina un elemento específico por ID.
- **Respuesta exitosa:**
    ```json
    {
        "message": "Elemento eliminado exitosamente"
    }
    ```

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o envía un pull request para contribuir.
