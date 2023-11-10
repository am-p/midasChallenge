# Midas challenge

## Gestión de productos

Desarrolla una API REST para gestionar productos de un catálogo. Debe permitir a los usuarios
realizar las siguientes acciones:

1. Crear un nuevo producto con nombre, descripción, precio y categoría. Puedes agregar más
   datos si lo crees conveniente.
2. Actualizar la información de un producto.
3. Eliminar un producto.
4. Obtener la lista de todos los productos. Implementa algún filtro.
5. Implementa autenticación JWT para asegurarte de que solo los usuarios registrados puedan
   realizar acciones en el catálogo de productos.
6. Implementa paginación y ordenamiento en la lista de productos.
7. Utiliza PostgreSQL como base de datos para almacenar los productos. Se prefiere Sequelize
   como ORM, pero se aceptan otros.
8. Documenta la API, preferentemente con Swagger.
9. Opcional: Utiliza TypeScript para desarrollar la API.

## Aspectos a evaluar:

• Estructura del proyecto y código.
• Uso de Express.js.
• Implementación de autenticación JWT.
• Uso de PostgreSQL como base de datos.
• Paginación y ordenamiento en la lista de productos.
• Buenas prácticas de código.
• Comentarios en el código (explicaciones breves pero claras).
• Posibilidad de ejecutar la aplicación en Docker (opcional).
• Opcional: Uso de TypeScript.
• Pruebas unitarias (opcional).

### Prerequisitos:

- Postgres
- NodeJS

### Instrucciones:

- Clonar el repo
- Instalar dependencias (ejecutar `npm i`).
- Ingresar a postgres:
  `psql -U usuario --password`
- Crear base de datos en la instancia:
  `CREATE DATABASE midasdb`
- .env-sample tiene que ser movido a .env
- Para iniciar el servicio ejecutar el siguiente comando en la consola:
  `npm run start`

### Observaciones:

- En un sistema robusto pondríamos un usuario administrador por defecto, en este caso por cuestiones de tiempo, no fue tenido en cuenta.
