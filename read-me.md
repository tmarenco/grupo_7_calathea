### Aclaraciones:

## Uso de la web

Primero instalar todas las dependecias.
Luego click derecho en "app.js" y click en "Abrir en terminal integrado" y correr el comando "node app.js".
Luego ingresar a la dirección: http://localhost:3000/

## Acceso a usuario adminsitrador:

Mail: liomessi@gmail.com
Contraseña: Lionel10!!

Ingresando desde un usuario administrador es de la única forma que se pueden crear, editar y borrar productos.
También es la única manera para ver el listado de usuarios, borrar usuarios y crear un nuevo usuario administrador.

## Faltantes:

El carrito es solo visual y no tiene funcionalidad, lo mismo para los botones de "Agregar al carrito de cada uno de los productos.
Tampoco sirve el buscador de productos, el newsletter y la sección de contacto. Son solo items visuales.

## Acceso al dashboard:

Luego de instalar todo lo relacionado con React, hay que ingresar a la carpeta "src", y luego a la carpeta "calathea-dashboard". Una vez dentro, correr el comando "npm start".
Tener en cuenta que el proyecto está corriendo en el puerto 3000 y si ya tenemos abierto el proyecto en este puerto, no podremos abrir el dashboard en el mismo, tendríamos que ingresar mediante otro puerto. Al hacer "npm start", si es que estamos ya utilizando el puerto 3000, nos ofrece ingresar en otro puerto.

## Aclaración base de datos

En la carpeta "database/config" figura la conexión al servidor de la base de datos. Hay 2 conexiones distintas, una es la conexión local a la base de datos y la otra es la conexión remota para poder hostear la página en heroku.
Actualmente la conexión local está comentada para darle uso a la conexión remota. Esta conexión se hizo mediante "Free Remote MySQL" (https://remotemysql.com/). 




# ¡Muchas gracias!