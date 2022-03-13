const localStorageUsuario = JSON.parse(localStorage.getItem("LoginCorrectoUsuario"));
const localStorageContrasena = JSON.parse(localStorage.getItem("LoginCorrectoContraseña"));
const obtenerSectionMostrarBaseDatos = document.getElementById("sectionMostrarBaseDatos");
const obtenerSectionSinLogin = document.getElementById("sinLogin");
mostrarBaseDatos = () =>{
    obtenerSectionMostrarBaseDatos.style.display = "flex";
    obtenerSectionSinLogin.style.display = "none";
};
restringirBaseDatos = ()  =>{
    obtenerSectionMostrarBaseDatos.style.display = "none";
    obtenerSectionSinLogin.style.display = "flex";
}
/* validarLocalStorage = () =>{

    localStorageUsuario != null && localStorageContrasena != null ? mostrarBaseDatos() : restringirBaseDatos();
};
validarLocalStorage(); */
let url;
simularUrl = () =>{
    localStorageUsuario != null && localStorageContrasena != null ? url = "../json/simulaUsuarioValido.json" : url = "../json/simulaUsuarioNull.json";
};
simularUrl()
const simulandoFetch = async () => {
    const obtenerFetch = await fetch(url);
    const obtenerFetchJSON = await obtenerFetch.json();
    Object.entries(obtenerFetchJSON).length === 1 ? mostrarBaseDatos() : restringirBaseDatos(); 
};
simulandoFetch();