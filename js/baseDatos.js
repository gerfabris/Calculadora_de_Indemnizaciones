const localStorageDespidosTrabajoRegistrado = JSON.parse(localStorage.getItem("DespidosTrabajoRegistrado"));
const localStorageDatosUsuariosTrabajoRegistrado = JSON.parse(localStorage.getItem("UsuarioTrabajoRegistrado"));
const localStorageTrabajoNoRegistrado = JSON.parse(localStorage.getItem("DespidosTrabajoNoRegistrado"));
const localStorageDatosUsuariosTrabajoNoRegistrado = JSON.parse(localStorage.getItem("UsuarioTrabajoNoRegistrado"));
const localStorageIndemnizacionesRenuncias = JSON.parse(localStorage.getItem("IndemnizacionesRenuncias"));
//const localStorageUsuariosRenuncia = JSON.parse(localStorage.getItem("DatosUsuariosRenuncia"));
let localStorageUsuariosRenuncia; //obtener localstorage con funcion
localStorageUsuariosRenuncia= jsonParse(localStorageUsuariosRenuncia,"DatosUsuariosRenuncia");
//declaro arrays para crear copia del localStorage y poder trabajarlos
let despidosTrabajoRegistrado  = [];
let datosUsuariosTrabajoRegistrado = [];
let despidosTrabajoNoRegistrado  = [];
let datosUsuariosTrabajoNoRegistrado = [];
let indemnizacionesRenuncias  = [];
let datosUsuariosRenuncia = [];
let datosUsuariosGlobal= [];
//mensaje en caso de null
let mensaje = ["No hay nada que mostrar"];
//Funciones para copiar si localStorage nos aporta información
//para obtener copia de despidos trabajo registrado
const controlDespidosRegistrados = () => {
    localStorageDespidosTrabajoRegistrado != null ? despidosTrabajoRegistrado  = localStorageDespidosTrabajoRegistrado : despidosTrabajoRegistrado = mensaje
};
//ejecución
controlDespidosRegistrados();
//para obtener copia de usuarios despidos trabajo registrado con operador or ||
const controlDatosUsuariosTrabajoRegistrado = () => {
    datosUsuariosTrabajoRegistrado  = localStorageDatosUsuariosTrabajoRegistrado || mensaje //operador or
};
controlDatosUsuariosTrabajoRegistrado();
//para obtener copia de despidos trabajo No registrado con operador ternario
const controlDespidosNoRegistrados = () => {
    localStorageTrabajoNoRegistrado != null ? despidosTrabajoNoRegistrado  = localStorageTrabajoNoRegistrado : despidosTrabajoNoRegistrado = mensaje
};
//ejecución
controlDespidosNoRegistrados();
//para obtener copia de usuarios despidos trabajo NO registrado con operador OR ||
const controlDatosUsuariosTrabajoNoRegistrado = () => {
    datosUsuariosTrabajoNoRegistrado  = localStorageDatosUsuariosTrabajoNoRegistrado || mensaje; //operador or
};
controlDatosUsuariosTrabajoNoRegistrado();
//para obtener copia de indemnizaciones renuncias con operador OR ||
const controlIndemnizacionesRenuncias = () => {
    indemnizacionesRenuncias  = localStorageIndemnizacionesRenuncias || mensaje;
};
controlIndemnizacionesRenuncias();
//para obtener copia de usuarios de indemnizaciones renuncias con operador OR ||
const controlDatosUsuariosRenuncia = () => {
    datosUsuariosRenuncia  = localStorageUsuariosRenuncia || mensaje;
};
controlDatosUsuariosRenuncia();
//Arrays Indemnizaciones --------
//Copia arrays para trabajar
    //Copia array Despidos trabajo registrado
let copiaDespidosTrabajoRegistrado = despidosTrabajoRegistrado;
    //Copia array Despidos trabajo NO registrado
let copiaDespidosTrabajoNoRegistrado = despidosTrabajoNoRegistrado;
    //Copia array Renuncias
let copiaIndemnizacionesRenuncias = indemnizacionesRenuncias;
//FIn Copia arrays para trabajar
// Obtener elementos del html
//de trabajo registrado
const contenedorResultadosTrabajoRegistrado = document.getElementById("contenedorResultadosTrabajoRegistrado");
const obtenerTodosTrabajoRegistrado = document.getElementById("todosTrabajoRegistrado");
    //para orden
const obtenerOrdenarTodosTrabajoRegistrado = document.getElementById("ordenarTodosTrabajoRegistrado");
const obtenerOrdenarNingunoTrabajoRegistrado = document.getElementById("ordenarNingunoTrabajoRegistrado");
const obtenerOrdenarPorIDTrabajoRegistrado = document.getElementById("ordenarPorIDTrabajoRegistrado");
const obtenerOrdenarPorTotalTrabajoRegistrado = document.getElementById("ordenarPorTotalTrabajoRegistrado");
const obtenerOrdenarPorSalarioTrabajoRegistrado = document.getElementById("ordenarPorSalarioTrabajoRegistrado");
    //para filtrado
const obtenerMontoMayorTrabajoRegistrado = document.getElementById("montoMayorTrabajoRegistrado");
const obtenerMontoMenorTrabajoRegistrado = document.getElementById("montoMenorTrabajoRegistrado");
const obtenerFiltrarMayorAntiguedadTrabajoRegistrado = document.getElementById("filtrarMayorAntiguedadTrabajoRegistrado");
const obtenerFiltrarMenorAntiguedadTrabajoRegistrado = document.getElementById("filtrarMenorAntiguedadTrabajoRegistrado");
const obtenerNingunoTrabajoRegistrado = document.getElementById("ningunoTrabajoRegistrado");
//de trabajo no registrado
const contenedorResultadosTrabajoNoRegistrado = document.getElementById("contenedorResultadosTrabajoNoRegistrado");
const obtenerTodosTrabajoNoRegistrado = document.getElementById("todosTrabajoNoRegistrado");
    //para orden
const obtenerOrdenarTodosTrabajoNoRegistrado = document.getElementById("ordenarTodosTrabajoNoRegistrado");
const obtenerOrdenarNingunoTrabajoNoRegistrado = document.getElementById("ordenarNingunoTrabajoNoRegistrado");
const obtenerOrdenarPorIDTrabajoNoRegistrado = document.getElementById("ordenarPorIDTrabajoNoRegistrado");
const obtenerOrdenarPorTotalTrabajoNoRegistrado = document.getElementById("ordenarPorTotalTrabajoNoRegistrado");
const obtenerOrdenarPorSalarioTrabajoNoRegistrado = document.getElementById("ordenarPorSalarioTrabajoNoRegistrado");   
    //para filtrado
const obtenerMontoMayorTrabajoNoRegistrado = document.getElementById("montoMayorTrabajoNoRegistrado");
const obtenerMontoMenorTrabajoNoRegistrado = document.getElementById("montoMenorTrabajoNoRegistrado");
const obtenerFiltrarMayorAntiguedadTrabajoNoRegistrado = document.getElementById("filtrarMayorAntiguedadTrabajoNoRegistrado");
const obtenerFiltrarMenorAntiguedadTrabajoNoRegistrado = document.getElementById("filtrarMenorAntiguedadTrabajoNoRegistrado");
const obtenerNingunoTrabajoNoRegistrado = document.getElementById("ningunoTrabajoNoRegistrado");
//de indemnizaciones renuncias
const obtenerTodosRenuncia = document.getElementById("todosRenuncia");
const contenedorResultadosIndemnizacionesRenuncias = document.getElementById("contenedorResultadosIndemnizacionesRenuncias");
    //para orden
const obtenerOrdenarTodosRenuncias = document.getElementById("ordenarTodosRenuncias");
const obtenerOrdenarNingunoRenuncias = document.getElementById("ordenarNingunoRenuncias");
const obtenerOrdenarPorIDIndemnizacionesRenuncia = document.getElementById("ordenarPorIDIndemnizacionesRenuncia");
const obtenerOrdenarPorTotalIndemnizacionesRenuncia = document.getElementById("ordenarPorTotalIndemnizacionesRenuncia");
const obtenerOrdenarPorSalarioIndemnizacionesRenuncia = document.getElementById("ordenarPorSalarioIndemnizacionesRenuncia");
    //para filtrado
const obtenerMontoMayorIndemnizacionesRenuncias = document.getElementById("montoMayorIndemnizacionesRenuncias");
const obtenerMontoMenorIndemnizacionesRenuncias = document.getElementById("montoMenorIndemnizacionesRenuncias");
const obtenerFiltrarMayorAntiguedadIndemnizacionesRenuncias = document.getElementById("filtrarMayorAntiguedadIndemnizacionesRenuncias");
const obtenerFiltrarMenorAntiguedadIndemnizacionesRenuncias = document.getElementById("filtrarMenorAntiguedadIndemnizacionesRenuncias");  
const obtenerNingunoIndemnizacionesRenuncias = document.getElementById("ningunoIndemnizacionesRenuncias");
// Fin Obtener elementos del html
//filtrar por mayor
    //trabajo registrado
filtrarMayorTotalMostrar(obtenerMontoMayorTrabajoRegistrado,copiaDespidosTrabajoRegistrado,300000,contenedorResultadosTrabajoRegistrado);
    //trabajo no registrado
filtrarMayorTotalMostrar(obtenerMontoMayorTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,500000,contenedorResultadosTrabajoNoRegistrado);
    //indemnizaciones por renuncias
filtrarMayorTotalMostrar(obtenerMontoMayorIndemnizacionesRenuncias,copiaIndemnizacionesRenuncias,200000,contenedorResultadosIndemnizacionesRenuncias);
//Fin filtrar por mayor
//Mostrar todos los elementos
    //de trabajo registrado
volverMostrarTodos(obtenerTodosTrabajoRegistrado,copiaDespidosTrabajoRegistrado,contenedorResultadosTrabajoRegistrado)
    //de trabajo registrado
volverMostrarTodos(obtenerTodosTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,contenedorResultadosTrabajoNoRegistrado);
    //de indemnizaciones renuncias
volverMostrarTodos(obtenerTodosRenuncia,copiaIndemnizacionesRenuncias,contenedorResultadosIndemnizacionesRenuncias);
//Fin //Mostrar todos los elementos
//Filtro por monto menor
    //de trabajo registrado
filtrarMenorTotalMostrar(obtenerMontoMenorTrabajoRegistrado,copiaDespidosTrabajoRegistrado,250000,contenedorResultadosTrabajoRegistrado);
    //de trabajo no registrado
filtrarMenorTotalMostrar(obtenerMontoMenorTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,250000,contenedorResultadosTrabajoNoRegistrado);
    //de indemnizaciones renuncias
filtrarMenorTotalMostrar(obtenerMontoMenorIndemnizacionesRenuncias,copiaIndemnizacionesRenuncias,100000,contenedorResultadosIndemnizacionesRenuncias)
//Fin Filtro por monto menor
//Filtro Mayor antiguedad
    //de trabajo registrado
filtrarMayorAntiguedad(obtenerFiltrarMayorAntiguedadTrabajoRegistrado,copiaDespidosTrabajoRegistrado,5,contenedorResultadosTrabajoRegistrado);
    //de trabajo no registrado
filtrarMayorAntiguedad(obtenerFiltrarMayorAntiguedadTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,5,contenedorResultadosTrabajoNoRegistrado);
    //de indemnizaciones renuncias
filtrarMayorAntiguedad(obtenerFiltrarMayorAntiguedadIndemnizacionesRenuncias,copiaIndemnizacionesRenuncias,5,contenedorResultadosIndemnizacionesRenuncias);
//Fin filtro mayor antiguedad
//Filtro menor antiguedad
    //de trabajo registrado
filtrarMenorAntiguedad(obtenerFiltrarMenorAntiguedadTrabajoRegistrado,copiaDespidosTrabajoRegistrado,5,contenedorResultadosTrabajoRegistrado);
    //de trabajo no registrado
filtrarMenorAntiguedad(obtenerFiltrarMenorAntiguedadTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,5,contenedorResultadosTrabajoNoRegistrado);
    //de indemnizaciones renuncias
filtrarMenorAntiguedad(obtenerFiltrarMenorAntiguedadIndemnizacionesRenuncias,copiaIndemnizacionesRenuncias,5,contenedorResultadosIndemnizacionesRenuncias);
//Fin filtro menor antiguedad
//filtrar ninguno
    //de trabajo registrado
filtrarninguno(obtenerNingunoTrabajoRegistrado,contenedorResultadosTrabajoRegistrado);
    //de trabajo no registrado
filtrarninguno(obtenerNingunoTrabajoNoRegistrado,contenedorResultadosTrabajoNoRegistrado);
    //de indemnizaciones renuncias
filtrarninguno(obtenerNingunoIndemnizacionesRenuncias,contenedorResultadosIndemnizacionesRenuncias);
//FIN filtrar ninguno
//Ordenar INDEMNIZACIONES
//Ordenar ninguno
    //de trabajo registrado
filtrarninguno(obtenerOrdenarNingunoTrabajoRegistrado,contenedorResultadosTrabajoRegistrado);
    //de trabajo no registrado
filtrarninguno(obtenerOrdenarNingunoTrabajoNoRegistrado,contenedorResultadosTrabajoNoRegistrado);
    //de indemnizaciones renuncias
filtrarninguno(obtenerOrdenarNingunoRenuncias,contenedorResultadosIndemnizacionesRenuncias);
//FIN Ordenar ninguno
//Ordenar todos los elementos
    //de trabajo registrado
volverMostrarTodos(obtenerOrdenarTodosTrabajoRegistrado,copiaDespidosTrabajoRegistrado,contenedorResultadosTrabajoRegistrado)
    //de trabajo registrado
volverMostrarTodos(obtenerOrdenarTodosTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,contenedorResultadosTrabajoNoRegistrado);
    //de indemnizaciones renuncias
volverMostrarTodos(obtenerOrdenarTodosRenuncias,copiaIndemnizacionesRenuncias,contenedorResultadosIndemnizacionesRenuncias);
//Fin Ordenar todos los elementos
//Ordenar por ID
    //de trabajo registrado
ordenarPorID(obtenerOrdenarPorIDTrabajoRegistrado,copiaDespidosTrabajoRegistrado,contenedorResultadosTrabajoRegistrado);
    //de trabajo registrado
ordenarPorID(obtenerOrdenarPorIDTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,contenedorResultadosTrabajoNoRegistrado);
    //de indemnizaciones renuncias
ordenarPorID(obtenerOrdenarPorIDIndemnizacionesRenuncia,copiaIndemnizacionesRenuncias,contenedorResultadosIndemnizacionesRenuncias);
//FIN ordenar por ID
//Ordenar por Total
    //de trabajo registrado
ordenarPorTotal(obtenerOrdenarPorTotalTrabajoRegistrado,copiaDespidosTrabajoRegistrado,contenedorResultadosTrabajoRegistrado);
    //de trabajo registrado
ordenarPorTotal(obtenerOrdenarPorTotalTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,contenedorResultadosTrabajoNoRegistrado);
    //de indemnizaciones renuncias
ordenarPorTotal(obtenerOrdenarPorTotalIndemnizacionesRenuncia,copiaIndemnizacionesRenuncias,contenedorResultadosIndemnizacionesRenuncias);
//FIN ordenar por Total
//Ordenar por Salario
    //de trabajo registrado
ordenarPorSalario(obtenerOrdenarPorSalarioTrabajoRegistrado,copiaDespidosTrabajoRegistrado,contenedorResultadosTrabajoRegistrado);
    //de trabajo registrado
ordenarPorSalario(obtenerOrdenarPorSalarioTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,contenedorResultadosTrabajoNoRegistrado);
    //de indemnizaciones renuncias
ordenarPorSalario(obtenerOrdenarPorSalarioIndemnizacionesRenuncia,copiaIndemnizacionesRenuncias,contenedorResultadosIndemnizacionesRenuncias);
//FIN ordenar por Salario
//FIN Ordenar INDEMNIZACIONES

//Arrays Usuarios ----------
//Creación de array de todos los datos de los usuarios
let global = datosUsuariosGlobal.concat(datosUsuariosTrabajoRegistrado,datosUsuariosTrabajoNoRegistrado,datosUsuariosRenuncia);
let copiaDatosUsuariosGlobal = global;
//Copia Array usuarios trabajo registrado
let copiaDatosUsuariosTrabajoRegistrado = datosUsuariosTrabajoRegistrado;
//copia array usuarios trabajo no registrado
let copiaDatosUsuariosTrabajoNoRegistrado = datosUsuariosTrabajoNoRegistrado;
//Copia array renuncias
let copiaDatosUsuariosRenuncia = datosUsuariosRenuncia;

// Obtener elementos del html
const contenedorResultadosGlobales = document.getElementById("contenedorResultadosGlobales");
//para filtrar
const obtenerTodosGlobal = document.getElementById("todosGlobal");
const obtenerTodosUsuariosTrabajoRegistrado = document.getElementById("todosUsuariosTrabajoRegistrado");
const obtenerTodosUsuariosTrabajoNoRegistrado = document.getElementById("todosUsuariosTrabajoNoRegistrado");
const obtenerTodosUsuariosIndemnizacionesRenuncias = document.getElementById("todosUsuariosIndemnizacionesRenuncias");
const obtenerNingunoUsuarios = document.getElementById("ningunoUsuarios");
const obtenerEmailsGlobal = document.getElementById("emailsGlobal");
const obtenerEmailsTrabajoRegistrado = document.getElementById("emailsTrabajoRegistrado");
const obtenerEmailsTrabajoNoRegistrado = document.getElementById("emailsTrabajoNoRegistrado");
const obtenerEmailsIndemnizacionesRenuncias = document.getElementById("emailsIndemnizacionesRenuncias");
//Para ordenar
const obtenerTodosGlobalOrdenar = document.getElementById("todosGlobalOrdenar");
const obtenerNingunoUsuariosOrdenar = document.getElementById("ningunoUsuariosOrdenar");
const obtenerOrdenarPorTrabajo = document.getElementById("ordenarPorTrabajo");
const obtenerOrdenarPorNombre = document.getElementById("ordenarPorNombre");
const obtenerOrdenarPorApellido = document.getElementById("ordenarPorApellido");
const obtenerOrdenarPorEmail = document.getElementById("ordenarPorEmail"); 
// FIN obtener elementos del html
//FILTROS
//filtrar ninguno
filtrarninguno(obtenerNingunoUsuarios,contenedorResultadosGlobales);
//filtro todos usuarios
    //global
filtrarTodosUsuarios(obtenerTodosGlobal,copiaDatosUsuariosGlobal,contenedorResultadosGlobales);
    //trabajo registrado
filtrarTodosUsuarios(obtenerTodosUsuariosTrabajoRegistrado,copiaDatosUsuariosTrabajoRegistrado,contenedorResultadosGlobales);
    //trabajo no registrado
filtrarTodosUsuarios(obtenerTodosUsuariosTrabajoNoRegistrado,copiaDatosUsuariosTrabajoNoRegistrado,contenedorResultadosGlobales);
    //indemnizaciones renuncias
filtrarTodosUsuarios(obtenerTodosUsuariosIndemnizacionesRenuncias,copiaDatosUsuariosRenuncia,contenedorResultadosGlobales);
//filtro todos usuariosl
//Función para obtener arrays con emails
    //global
filtrarEmails(obtenerEmailsGlobal,copiaDatosUsuariosGlobal,contenedorResultadosGlobales);
    //Trabajo registrado
filtrarEmails(obtenerEmailsTrabajoRegistrado,copiaDatosUsuariosTrabajoRegistrado,contenedorResultadosGlobales);
    //de trabajo no registrado
filtrarEmails(obtenerEmailsTrabajoNoRegistrado,copiaDatosUsuariosTrabajoNoRegistrado,contenedorResultadosGlobales);
    //de indemnizaciones renuncias
filtrarEmails(obtenerEmailsIndemnizacionesRenuncias,copiaDatosUsuariosRenuncia,contenedorResultadosGlobales);
//ORDENAR
    //mostrar todos
filtrarTodosUsuarios(obtenerTodosGlobalOrdenar,copiaDatosUsuariosGlobal,contenedorResultadosGlobales);
    //mostrar ninguno
filtrarninguno(obtenerNingunoUsuariosOrdenar,contenedorResultadosGlobales);
    //ordenar por trabajo
ordenarPorTrabajo(obtenerOrdenarPorTrabajo,copiaDatosUsuariosGlobal,contenedorResultadosGlobales);
    //ordenar por nombre
ordenarPorNombre(obtenerOrdenarPorNombre,copiaDatosUsuariosGlobal,contenedorResultadosGlobales);
    //ordenar por apellido
ordenarPorApellido(obtenerOrdenarPorApellido,copiaDatosUsuariosGlobal,contenedorResultadosGlobales);
    //ordenar por email
ordenarPorEmail(obtenerOrdenarPorEmail,copiaDatosUsuariosGlobal,contenedorResultadosGlobales);
