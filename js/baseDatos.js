const localStorageDespidosTrabajoRegistrado = JSON.parse(localStorage.getItem("DespidosTrabajoRegistrado"));
const localStorageDatosUsuariosTrabajoRegistrado = JSON.parse(localStorage.getItem("UsuarioTrabajoRegistrado"));
const localStorageTrabajoNoRegistrado = JSON.parse(localStorage.getItem("DespidosTrabajoNoRegistrado"));
const localStorageDatosUsuariosTrabajoNoRegistrado = JSON.parse(localStorage.getItem("UsuarioTrabajoNoRegistrado"));
const localStorageIndemnizacionesRenuncias = JSON.parse(localStorage.getItem("IndemnizacionesRenuncias"));
let localStorageUsuariosRenuncia; //obtener localstorage con funcion
localStorageUsuariosRenuncia= jsonParse(localStorageUsuariosRenuncia,"DatosUsuariosRenuncia");
let despidosTrabajoRegistrado  = localStorageDespidosTrabajoRegistrado || [];
let datosUsuariosTrabajoRegistrado = localStorageDatosUsuariosTrabajoRegistrado || []
let despidosTrabajoNoRegistrado  = localStorageTrabajoNoRegistrado || [];
let datosUsuariosTrabajoNoRegistrado = localStorageDatosUsuariosTrabajoNoRegistrado || [];
let indemnizacionesRenuncias  = localStorageIndemnizacionesRenuncias || [];
let datosUsuariosRenuncia = localStorageUsuariosRenuncia || [];
let datosUsuariosGlobal= [];
let global = datosUsuariosGlobal.concat(datosUsuariosTrabajoRegistrado,datosUsuariosTrabajoNoRegistrado,datosUsuariosRenuncia);
//Arrays Indemnizaciones
//Copia arrays para trabajar
let copiaDespidosTrabajoRegistrado = despidosTrabajoRegistrado;
let copiaDespidosTrabajoNoRegistrado = despidosTrabajoNoRegistrado;
let copiaIndemnizacionesRenuncias = indemnizacionesRenuncias;
// Obtener elementos del html
//de trabajo registrado
const contenedorResultadosTrabajoRegistrado = document.getElementById("contenedorResultadosTrabajoRegistrado");
const obtenerTodosTrabajoRegistrado = document.getElementById("todosTrabajoRegistrado");
const obtenerOrdenarTodosTrabajoRegistrado = document.getElementById("ordenarTodosTrabajoRegistrado");
const obtenerOrdenarNingunoTrabajoRegistrado = document.getElementById("ordenarNingunoTrabajoRegistrado");
const obtenerOrdenarPorIDTrabajoRegistrado = document.getElementById("ordenarPorIDTrabajoRegistrado");
const obtenerOrdenarPorTotalTrabajoRegistrado = document.getElementById("ordenarPorTotalTrabajoRegistrado");
const obtenerOrdenarPorSalarioTrabajoRegistrado = document.getElementById("ordenarPorSalarioTrabajoRegistrado");
const obtenerMontoMayorTrabajoRegistrado = document.getElementById("montoMayorTrabajoRegistrado");
const obtenerMontoMenorTrabajoRegistrado = document.getElementById("montoMenorTrabajoRegistrado");
const obtenerFiltrarMayorAntiguedadTrabajoRegistrado = document.getElementById("filtrarMayorAntiguedadTrabajoRegistrado");
const obtenerFiltrarMenorAntiguedadTrabajoRegistrado = document.getElementById("filtrarMenorAntiguedadTrabajoRegistrado");
const obtenerNingunoTrabajoRegistrado = document.getElementById("ningunoTrabajoRegistrado");
//de trabajo no registrado
const contenedorResultadosTrabajoNoRegistrado = document.getElementById("contenedorResultadosTrabajoNoRegistrado");
const obtenerTodosTrabajoNoRegistrado = document.getElementById("todosTrabajoNoRegistrado");
const obtenerOrdenarTodosTrabajoNoRegistrado = document.getElementById("ordenarTodosTrabajoNoRegistrado");
const obtenerOrdenarNingunoTrabajoNoRegistrado = document.getElementById("ordenarNingunoTrabajoNoRegistrado");
const obtenerOrdenarPorIDTrabajoNoRegistrado = document.getElementById("ordenarPorIDTrabajoNoRegistrado");
const obtenerOrdenarPorTotalTrabajoNoRegistrado = document.getElementById("ordenarPorTotalTrabajoNoRegistrado");
const obtenerOrdenarPorSalarioTrabajoNoRegistrado = document.getElementById("ordenarPorSalarioTrabajoNoRegistrado");   
const obtenerMontoMayorTrabajoNoRegistrado = document.getElementById("montoMayorTrabajoNoRegistrado");
const obtenerMontoMenorTrabajoNoRegistrado = document.getElementById("montoMenorTrabajoNoRegistrado");
const obtenerFiltrarMayorAntiguedadTrabajoNoRegistrado = document.getElementById("filtrarMayorAntiguedadTrabajoNoRegistrado");
const obtenerFiltrarMenorAntiguedadTrabajoNoRegistrado = document.getElementById("filtrarMenorAntiguedadTrabajoNoRegistrado");
const obtenerNingunoTrabajoNoRegistrado = document.getElementById("ningunoTrabajoNoRegistrado");
//de indemnizaciones renuncias
const obtenerTodosRenuncia = document.getElementById("todosRenuncia");
const contenedorResultadosIndemnizacionesRenuncias = document.getElementById("contenedorResultadosIndemnizacionesRenuncias");
const obtenerOrdenarTodosRenuncias = document.getElementById("ordenarTodosRenuncias");
const obtenerOrdenarNingunoRenuncias = document.getElementById("ordenarNingunoRenuncias");
const obtenerOrdenarPorIDIndemnizacionesRenuncia = document.getElementById("ordenarPorIDIndemnizacionesRenuncia");
const obtenerOrdenarPorTotalIndemnizacionesRenuncia = document.getElementById("ordenarPorTotalIndemnizacionesRenuncia");
const obtenerOrdenarPorSalarioIndemnizacionesRenuncia = document.getElementById("ordenarPorSalarioIndemnizacionesRenuncia");
const obtenerMontoMayorIndemnizacionesRenuncias = document.getElementById("montoMayorIndemnizacionesRenuncias");
const obtenerMontoMenorIndemnizacionesRenuncias = document.getElementById("montoMenorIndemnizacionesRenuncias");
const obtenerFiltrarMayorAntiguedadIndemnizacionesRenuncias = document.getElementById("filtrarMayorAntiguedadIndemnizacionesRenuncias");
const obtenerFiltrarMenorAntiguedadIndemnizacionesRenuncias = document.getElementById("filtrarMenorAntiguedadIndemnizacionesRenuncias");  
const obtenerNingunoIndemnizacionesRenuncias = document.getElementById("ningunoIndemnizacionesRenuncias");
//filtrar por mayor
filtrarMayorTotalMostrar(obtenerMontoMayorTrabajoRegistrado,copiaDespidosTrabajoRegistrado,300000,contenedorResultadosTrabajoRegistrado);
filtrarMayorTotalMostrar(obtenerMontoMayorTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,500000,contenedorResultadosTrabajoNoRegistrado);
filtrarMayorTotalMostrar(obtenerMontoMayorIndemnizacionesRenuncias,copiaIndemnizacionesRenuncias,200000,contenedorResultadosIndemnizacionesRenuncias);
//Mostrar todos los elementos
volverMostrarTodos(obtenerTodosTrabajoRegistrado,copiaDespidosTrabajoRegistrado,contenedorResultadosTrabajoRegistrado)
volverMostrarTodos(obtenerTodosTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,contenedorResultadosTrabajoNoRegistrado);
volverMostrarTodos(obtenerTodosRenuncia,copiaIndemnizacionesRenuncias,contenedorResultadosIndemnizacionesRenuncias);
//Filtro por monto menor
filtrarMenorTotalMostrar(obtenerMontoMenorTrabajoRegistrado,copiaDespidosTrabajoRegistrado,250000,contenedorResultadosTrabajoRegistrado);
filtrarMenorTotalMostrar(obtenerMontoMenorTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,250000,contenedorResultadosTrabajoNoRegistrado);
filtrarMenorTotalMostrar(obtenerMontoMenorIndemnizacionesRenuncias,copiaIndemnizacionesRenuncias,100000,contenedorResultadosIndemnizacionesRenuncias)
//Filtro Mayor antiguedad
filtrarMayorAntiguedad(obtenerFiltrarMayorAntiguedadTrabajoRegistrado,copiaDespidosTrabajoRegistrado,5,contenedorResultadosTrabajoRegistrado);
filtrarMayorAntiguedad(obtenerFiltrarMayorAntiguedadTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,5,contenedorResultadosTrabajoNoRegistrado);
filtrarMayorAntiguedad(obtenerFiltrarMayorAntiguedadIndemnizacionesRenuncias,copiaIndemnizacionesRenuncias,5,contenedorResultadosIndemnizacionesRenuncias);
//Filtro menor antiguedad
filtrarMenorAntiguedad(obtenerFiltrarMenorAntiguedadTrabajoRegistrado,copiaDespidosTrabajoRegistrado,5,contenedorResultadosTrabajoRegistrado);
filtrarMenorAntiguedad(obtenerFiltrarMenorAntiguedadTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,5,contenedorResultadosTrabajoNoRegistrado);
filtrarMenorAntiguedad(obtenerFiltrarMenorAntiguedadIndemnizacionesRenuncias,copiaIndemnizacionesRenuncias,5,contenedorResultadosIndemnizacionesRenuncias);
//filtrar ninguno
filtrarNinguno(obtenerNingunoTrabajoRegistrado,contenedorResultadosTrabajoRegistrado);
filtrarNinguno(obtenerNingunoTrabajoNoRegistrado,contenedorResultadosTrabajoNoRegistrado);
filtrarNinguno(obtenerNingunoIndemnizacionesRenuncias,contenedorResultadosIndemnizacionesRenuncias);
//Ordenar ninguno
filtrarNinguno(obtenerOrdenarNingunoTrabajoRegistrado,contenedorResultadosTrabajoRegistrado);
filtrarNinguno(obtenerOrdenarNingunoTrabajoNoRegistrado,contenedorResultadosTrabajoNoRegistrado);
filtrarNinguno(obtenerOrdenarNingunoRenuncias,contenedorResultadosIndemnizacionesRenuncias);
//Ordenar todos los elementos
volverMostrarTodos(obtenerOrdenarTodosTrabajoRegistrado,copiaDespidosTrabajoRegistrado,contenedorResultadosTrabajoRegistrado)
volverMostrarTodos(obtenerOrdenarTodosTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,contenedorResultadosTrabajoNoRegistrado);
volverMostrarTodos(obtenerOrdenarTodosRenuncias,copiaIndemnizacionesRenuncias,contenedorResultadosIndemnizacionesRenuncias);
//Ordenar por ID
ordenarPorID(obtenerOrdenarPorIDTrabajoRegistrado,copiaDespidosTrabajoRegistrado,contenedorResultadosTrabajoRegistrado);
ordenarPorID(obtenerOrdenarPorIDTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,contenedorResultadosTrabajoNoRegistrado);
ordenarPorID(obtenerOrdenarPorIDIndemnizacionesRenuncia,copiaIndemnizacionesRenuncias,contenedorResultadosIndemnizacionesRenuncias);
//Ordenar por Total
ordenarPorTotal(obtenerOrdenarPorTotalTrabajoRegistrado,copiaDespidosTrabajoRegistrado,contenedorResultadosTrabajoRegistrado);
ordenarPorTotal(obtenerOrdenarPorTotalTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,contenedorResultadosTrabajoNoRegistrado);
ordenarPorTotal(obtenerOrdenarPorTotalIndemnizacionesRenuncia,copiaIndemnizacionesRenuncias,contenedorResultadosIndemnizacionesRenuncias);
//Ordenar por Salario
ordenarPorSalario(obtenerOrdenarPorSalarioTrabajoRegistrado,copiaDespidosTrabajoRegistrado,contenedorResultadosTrabajoRegistrado);
ordenarPorSalario(obtenerOrdenarPorSalarioTrabajoNoRegistrado,copiaDespidosTrabajoNoRegistrado,contenedorResultadosTrabajoNoRegistrado);
ordenarPorSalario(obtenerOrdenarPorSalarioIndemnizacionesRenuncia,copiaIndemnizacionesRenuncias,contenedorResultadosIndemnizacionesRenuncias);
//Arrays Usuarios
let copiaDatosUsuariosGlobal = global;
let copiaDatosUsuariosTrabajoRegistrado = datosUsuariosTrabajoRegistrado;
let copiaDatosUsuariosTrabajoNoRegistrado = datosUsuariosTrabajoNoRegistrado;
let copiaDatosUsuariosRenuncia = datosUsuariosRenuncia;
// Obtener elementos del html
const contenedorResultadosGlobales = document.getElementById("contenedorResultadosGlobales");
const obtenerTodosGlobal = document.getElementById("todosGlobal");
const obtenerTodosUsuariosTrabajoRegistrado = document.getElementById("todosUsuariosTrabajoRegistrado");
const obtenerTodosUsuariosTrabajoNoRegistrado = document.getElementById("todosUsuariosTrabajoNoRegistrado");
const obtenerTodosUsuariosIndemnizacionesRenuncias = document.getElementById("todosUsuariosIndemnizacionesRenuncias");
const obtenerNingunoUsuarios = document.getElementById("ningunoUsuarios");
const obtenerEmailsGlobal = document.getElementById("emailsGlobal");
const obtenerEmailsTrabajoRegistrado = document.getElementById("emailsTrabajoRegistrado");
const obtenerEmailsTrabajoNoRegistrado = document.getElementById("emailsTrabajoNoRegistrado");
const obtenerEmailsIndemnizacionesRenuncias = document.getElementById("emailsIndemnizacionesRenuncias");
const obtenerTodosGlobalOrdenar = document.getElementById("todosGlobalOrdenar");
const obtenerNingunoUsuariosOrdenar = document.getElementById("ningunoUsuariosOrdenar");
const obtenerOrdenarPorTrabajo = document.getElementById("ordenarPorTrabajo");
const obtenerOrdenarPorNombre = document.getElementById("ordenarPorNombre");
const obtenerOrdenarPorApellido = document.getElementById("ordenarPorApellido");
const obtenerOrdenarPorEmail = document.getElementById("ordenarPorEmail"); 
//filtrar ninguno
filtrarNinguno(obtenerNingunoUsuarios,contenedorResultadosGlobales);
//filtro todos usuarios
filtrarTodosUsuarios(obtenerTodosGlobal,copiaDatosUsuariosGlobal,contenedorResultadosGlobales);
filtrarTodosUsuarios(obtenerTodosUsuariosTrabajoRegistrado,copiaDatosUsuariosTrabajoRegistrado,contenedorResultadosGlobales);
filtrarTodosUsuarios(obtenerTodosUsuariosTrabajoNoRegistrado,copiaDatosUsuariosTrabajoNoRegistrado,contenedorResultadosGlobales);
filtrarTodosUsuarios(obtenerTodosUsuariosIndemnizacionesRenuncias,copiaDatosUsuariosRenuncia,contenedorResultadosGlobales);
//Filtro ara obtener arrays con emails
filtrarEmails(obtenerEmailsGlobal,copiaDatosUsuariosGlobal,contenedorResultadosGlobales);
filtrarEmails(obtenerEmailsTrabajoRegistrado,copiaDatosUsuariosTrabajoRegistrado,contenedorResultadosGlobales);
filtrarEmails(obtenerEmailsTrabajoNoRegistrado,copiaDatosUsuariosTrabajoNoRegistrado,contenedorResultadosGlobales);
filtrarEmails(obtenerEmailsIndemnizacionesRenuncias,copiaDatosUsuariosRenuncia,contenedorResultadosGlobales);
//mostrar todos
filtrarTodosUsuarios(obtenerTodosGlobalOrdenar,copiaDatosUsuariosGlobal,contenedorResultadosGlobales);
//mostrar ninguno
filtrarNinguno(obtenerNingunoUsuariosOrdenar,contenedorResultadosGlobales);
//ordenar
ordenarPorTrabajo(obtenerOrdenarPorTrabajo,copiaDatosUsuariosGlobal,contenedorResultadosGlobales);
ordenarPorNombre(obtenerOrdenarPorNombre,copiaDatosUsuariosGlobal,contenedorResultadosGlobales);
ordenarPorApellido(obtenerOrdenarPorApellido,copiaDatosUsuariosGlobal,contenedorResultadosGlobales);
ordenarPorEmail(obtenerOrdenarPorEmail,copiaDatosUsuariosGlobal,contenedorResultadosGlobales);
//Imprimir p??gina
imprimirDocumento();