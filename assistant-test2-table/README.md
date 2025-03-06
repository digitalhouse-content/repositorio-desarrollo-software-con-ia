# React + Vite

Esta aplicación es una tabla de tareas que permite filtrar y gestionar tareas basadas en diferentes criterios.

## Funcionalidades

- Filtrar tareas por nombre, descripción, dificultad, gasto máximo y prioridad.
- Mostrar solo tareas críticas.
- Limpiar los filtros para mostrar todas las tareas.
- Interfaz amigable y fácil de usar.

## Estructura del Proyecto

- `src/App.jsx`: Componente principal de la aplicación que contiene la lógica de filtrado y renderizado de tareas.
- `src/main.jsx`: Punto de entrada de la aplicación.
- `src/styles.css`: Estilos CSS para la aplicación.
- `src/App.test.jsx`: Pruebas unitarias para el componente `App`.

## Scripts Disponibles

- `dev`: Inicia el servidor de desarrollo.
- `build`: Construye la aplicación para producción.
- `lint`: Ejecuta ESLint para encontrar y arreglar problemas en el código.
- `preview`: Previsualiza la aplicación construida.
- `test`: Ejecuta las pruebas unitarias con Jest.

## Tecnologías Utilizadas

- React: Biblioteca de JavaScript para construir interfaces de usuario.
- Vite: Herramienta de construcción rápida para proyectos web modernos.
- ESLint: Herramienta de análisis estático para encontrar problemas en el código.
- Jest: Framework de pruebas para JavaScript.

## Instalación

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Inicia el servidor de desarrollo con `npm run dev`.

## Expandiendo la Configuración de ESLint

Si estás desarrollando una aplicación de producción, recomendamos usar TypeScript y habilitar reglas de linting conscientes del tipo. Consulta la [plantilla TS](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) para integrar TypeScript y [`typescript-eslint`](https://typescript-eslint.io) en tu proyecto.