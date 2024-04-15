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

//1.ALMACENAR RUTAS DE LA APLICACIÓN (las rutas se definen en otro módulo, pero luego se pasan al router para almacenarlas.
let ROUTES = {}; // El router necesita tener su propia variable para almacenar las rutas.

function setRoutes(routes) {
  routes = ROUTES;
} // Necesita una función que pueda ser invocada de otro módulo para asignar las rutas.
setRoutes();

//2. GENERAR LA VISTA ADECUADA SEGÚN RUTA DETERMINADA EN LA URL.
// El router debe tener una función que, cuando se le da un pathname, muestre la vista. Entonces, ¿qué significa "generar la vista"?
// Si piensas en pseudocódigo, debemos borrar el html de la página actual, llamar a la nueva función de vista correcta para renderizarla, y luego colocar el nuevo html en la página.

//2.1. Elto. DOM para almacenar el elto ráiz donde el contenido cambiará/aparecerá
let rootEl = ''; 

//2.2. Una función para establecer el elemento raíz del router.
const  setRootEl = (el) => {  console.log('setRootEl function'); } 
console.log(setRootEl);

//2.3. Una función que renderiza una vista en el elemento root especificado. Tiene dos parametros, 
//pathname que es el parte de window.location y props que es un objeto de datos que podemos pasar a la vista. 
//La función renderView borra el contenido existente, encuentra la función de view para el pathname dado y llama a esa función de vista pasando props como argumento ( más sobre eso en un momento ). 
//Luego agrega el elemento devuelto por la función de vista al elemento root.
const renderView = (pathname, props) => { //Aquí se cambia el nombre renderView, por el nombre de las vistas a renderizar respectivamente? ej: renderHome, renderChat, etc?
  // clear the current html (PARA ESTO EL ROUTER DEBE CONOCER EL ELTO PADRE DE LOS ELTOS, ES DECIR EL ELTO ROOT)
  // find the correct view to render
  // call the view function (with the props) and get the new html element
  // put new html in the page
};

//3. RESPONDER A LA NAVEGACIÓN DENTRO DE LA APP
//3.1. Agregar un nuevo estado al historial del navegador para actualizar la URL
//3.2. Renderizar la vista apropiada según el pathname (y pasar los argumentos apropiados a la función vista si hay)
