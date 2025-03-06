# API REST con Python y Flask

Este proyecto es una API REST construida con Python y Flask. Utiliza Docker para la contenedorización y gestión de dependencias, y PostgreSQL como base de datos.

## Requisitos

- Docker

## Instalación

1. Clona este repositorio:
    ```sh
    git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio
    ```

2. Construye y levanta los servicios con Docker Compose:
    ```sh
    docker-compose up --build
    ```

## Uso

La API estará disponible en `http://localhost:5000`.

### Endpoints

- `GET /usuarios`: Obtiene la lista de todos los usuarios.
- `GET /usuarios/<int:user_id>`: Obtiene la información de un usuario específico por ID.
- `POST /usuarios`: Crea un nuevo usuario. Debe recibir un JSON con los campos [name](http://_vscodecontentref_/2) y [email](http://_vscodecontentref_/3).
- `PUT /usuarios/<int:user_id>`: Actualiza la información de un usuario específico por ID. Debe recibir un JSON con los campos [name](http://_vscodecontentref_/4) y/o [email](http://_vscodecontentref_/5).
- `DELETE /usuarios/<int:user_id>`: Elimina un usuario específico por ID.

## Estructura del Proyecto

- [Dockerfile](http://_vscodecontentref_/6): Define la imagen de Docker para el proyecto.
- [docker-compose.yml](http://_vscodecontentref_/7): Configuración de Docker Compose para levantar los servicios.
- [requirements.txt](http://_vscodecontentref_/8): Lista de dependencias de Python.
- [app.py](http://_vscodecontentref_/9): Archivo principal de la aplicación que define los endpoints y la lógica de negocio.
- [.env](http://_vscodecontentref_/10): Archivo de configuración de variables de entorno.

