/* Almacenar las rutas de la aplicación.
Para un nombre de ruta determinado en la URL, renderizar la vista adecuada (y pasar los argumentos apropiados a la vista si hay search parámetros).
Responder a la navegación dentro de la aplicación (enlaces, clics en botones, etc.)
agregando un nuevo estado al historial del navegador para actualizar la URL
luego renderizando la vista apropiada según la ruta (y pasar el argumentos apropiados si hay parámetros)
Responder a la navegación con los botones de avance y retroceso en el navegador
analizando la nueva URL para la ruta y los parámetros
luego renderizando la vista apropiada según la ruta (y pasar los argumentos apropiados si hay parámetros)
Cargando una página de error cuando la ruta no está definido en las rutas.
No hay ningún error, mencionamos "renderizar la vista apropiada según la ruta" tres veces, entonces esto significa que escribiremos una función que haga esto para poder usarla varias veces.*/

//ALMACENAR RUTAS DE LA APLICACIÓN (las rutas se definen en otro módulo, pero luego se pasan al router para almacenarlas.

let ROUTES = {}; // El router necesita tener su propia variable para almacenar las rutas.

function setRoutes(routes) {
  ROUTES = routes
} // Necesita una función que pueda ser invocada de otro módulo para asignar las rutas.
setRoutes();